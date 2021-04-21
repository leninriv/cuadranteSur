import { Injectable } from '@angular/core';


import { AngularFireAuth } from 'angularfire2/auth';
import { NzMessageService } from 'ng-zorro-antd/message';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private firebaseAuth: AngularFireAuth, private message: NzMessageService) { }

  async login(email: string, password: string, remember: boolean) {
    return this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Nice, it worked!', value);
        const user: any = value.user;
        if (user && user.uid && remember) {
          const alquimiaUser: any = {
            email,
            uid: user.uid,
            userName: email
          };
          localStorage.setItem('alquimiaUser', JSON.stringify(alquimiaUser));
          return true;
        }
        // localStorage.getItem('alquimiaUser')
      })
      .catch(err => {
        console.log('Something went wrong:', err.message);
        this.logout();
        this.message.create('error', 'Usuario o contrasena incorrectos');
        return false;
      });
  }

  logout() {
    localStorage.setItem('alquimiaUser', null);
    this.firebaseAuth
      .auth
      .signOut();
  }
}
