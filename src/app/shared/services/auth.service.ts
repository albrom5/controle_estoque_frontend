import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IAuthUser } from '../models/iauthuser';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(user: IAuthUser): Observable<any> {
    const username: string = user.username;
    const password: string = user.password;

    return this.http.post(
      `${environment.apiurl}/token/pair`,
      {
        username,
        password
      },
      httpOptions
    );
  }

  getToken() {    
    const auth_user = JSON.parse(localStorage.getItem('auth-user') || '""');
    if (auth_user !== null) {
      return auth_user['access'];
    }
  }

  logout(): Observable<any> {
    return this.http.post(`${environment.apiurl}/signout`, { }, httpOptions);
  }
}