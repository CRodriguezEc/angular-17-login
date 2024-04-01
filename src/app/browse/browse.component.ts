import { Component, inject } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-browse',
  standalone: true,
  imports: [],
  templateUrl: './browse.component.html',
  styleUrl: './browse.component.css'
})
export default class BrowseComponent {
  auth = inject( AuthService );
  name = JSON.parse( sessionStorage.getItem("LoggedInUser")! ).name;
  userProfileImage = JSON.parse( sessionStorage.getItem("LoggedInUser")! ).picture;

  public signOut(){
    this.auth.signOut();
  }
}
