import { Router, ActivatedRoute } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  private user: Observable<firebase.User>;
  private userDetails: firebase.User = null;

  constructor(
    private as: AngularFireAuth,
    private router: Router,
    private activatedroute: ActivatedRoute,
    public afAuth: AngularFireAuth
  ) {
    this.user = afAuth.authState;
    this.user.subscribe(
      (user) => {
        if (user) {
          console.log("NO entiendo nada, si dentro");
          this.userDetails = user;
          console.log(this.userDetails);
        } else {
          console.log("Fuera");
          this.userDetails = null;
        }
      }
    );

  }

  registroUsuario(userdata) {
    return this.as.auth.createUserWithEmailAndPassword(userdata.email,
      userdata.password);
  }

  inicioSesion(userdata) {
    firebase.auth().signInWithEmailAndPassword(userdata.email,
      userdata.password);
  }

  isAuthenticated() {
    const user = firebase.auth().currentUser;
    if (user) {
      return true;
    } else {
      return false;
    }
  }

  logout() {
    firebase.auth().signOut();
  }

  isLogged() {
    return this.afAuth.authState;
  }

  doGoogleLogin() {
    return new Promise<any>((resolve, reject) => {
      const provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope('profile');
      provider.addScope('email');
      this.afAuth.auth.signInWithPopup(provider)
        .then(res => {
          resolve(res);
          this.router.navigate(['/peliculas']);
        });
    });
  }

  getUser() {
    if (firebase.auth().currentUser) {
      return firebase.auth().currentUser.email;
    } else {
      return null;
    }
  }

}
