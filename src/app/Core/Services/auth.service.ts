import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

/** Use 'api' for your .NET backend (POST) or 'json' for FakeDB.json via json-server (GET /users) */
const AUTH_SOURCE: 'api' | 'json' = 'json';

const API_LOGIN_URL = 'http://localhost:5000/api/auth/login';
const JSON_SERVER_USERS_URL = 'http://localhost:3000/users';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(userData: { email: string; password: string }): Observable<any> {
    if (AUTH_SOURCE === 'json') {
      return this.http.get(
        `${JSON_SERVER_USERS_URL}?email=${encodeURIComponent(userData.email)}&password=${encodeURIComponent(userData.password)}`
      );
    }
    return this.http.post(API_LOGIN_URL, userData);
  }
}
