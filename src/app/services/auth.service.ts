import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


export interface LoginForm {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = ""

  constructor(private http: HttpClient) { }

  login(loginForm: LoginForm) : Observable<any> {
    const body = {
      email: loginForm.email,
      password: loginForm.password
    };
    return this.http.post<any>(`${this.apiUrl}/login`, body);
  }
}
