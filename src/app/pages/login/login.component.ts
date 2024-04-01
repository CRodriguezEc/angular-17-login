declare var google: any;
import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export default class LoginComponent implements OnInit {
  //  Mediante inyeccion de dependencias agregamos el componente Router
  private router = inject(Router);

  ngOnInit(): void {
    google.accounts.id.initialize({
      client_id: '4112791403-oas1bp48li7d71edi1hd27vtj1963dgc.apps.googleusercontent.com',
      callback: ( resp: any ) => this.handleLogin( resp )
    })

    google.accounts.id.renderButton( document.getElementById("google-btn"), { 
      theme: 'filled_blue'
      , size: 'large'
      , with: 350
      , shape: 'pill' 
    })
  }

  private decodeToken( token: string ){
    return JSON.parse( atob( token.split(".")[1] ) );
  }

  public handleLogin( response: any ){
    if( response ){
      //  Decodificamos el token
      const payload = this.decodeToken( response.credential );

      //  Almacenamos en session el token
      sessionStorage.setItem( "LoggedInUser", JSON.stringify(payload) );

      //  Redirigimos a la pagina principal
      this.router.navigate(['browse']);
    }

    return;
  }

}
