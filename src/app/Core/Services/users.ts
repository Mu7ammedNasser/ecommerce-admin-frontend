import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Users {
  private readonly BaseUrl = "http://localhost:3000";
  /*
   *
   *
   */
  constructor(private http: HttpClient) {}



  getAllUsers(){
    return this.http.get(`${this.BaseUrl}/users`);
  }

  
}
