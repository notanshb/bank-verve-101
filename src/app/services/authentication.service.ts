import { Injectable } from '@angular/core';
import { Auth,
         authState,
         UserCredential,
         signInWithEmailAndPassword,
         createUserWithEmailAndPassword,
         updateProfile } from '@angular/fire/auth';
import { from,
         Observable,
         switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  currentUser$ = authState(this.auth);

  constructor(private auth: Auth) { }

  login(username: string, password: string) {
    return from(signInWithEmailAndPassword(this.auth, username, password));
  }

  signUp(email: string, password: string): Observable<UserCredential> {
    return from(createUserWithEmailAndPassword(this.auth, email, password))
    .pipe(switchMap(({ user }) => updateProfile(user, {displayName: "John"})));
  }

  logout() {
    return from(this.auth.signOut());
  }
}
