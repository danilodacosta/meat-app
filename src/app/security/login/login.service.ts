import { User }       from './user.model';
import { MEAT_API }   from './../../app.api';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {
  user: User;

  constructor(private httpClient: HttpClient) {}

  isLoggedIn(): boolean {
    return this.user !== undefined;
  }

  login(email: string, password: string): Observable<User> {
    return this.httpClient
      .post<User>(`${MEAT_API}/login`, { email: email, password: password })
      .do(user => (this.user = user));
  }

}
