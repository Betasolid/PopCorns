import { AutenticacionService } from './servicios/autenticacion.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private isLoggedIn: Boolean;
  private user_displayName: String;
  private user_email: String;

  constructor(public authService: AutenticacionService/*, private router: Router*/) {
    this.authService.afAuth.auth.onAuthStateChanged((user) => {
      if (user != null) {
          // User is logged in, use the user object for its info.
          this.isLoggedIn = true;
          this.user_displayName = user.displayName;
          this.user_email = user.email ;
          console.log('logged ON');
          // etc.
      } else {
          // User is not logged in, redirect to where you need to.
          this.isLoggedIn = false;
          console.log('No logged on');
      }
      // document.body.classList.add('loaded');
      document.getElementById('container').classList.add('loaded');
  });
  }

  ngOnInit () {
  }
 }