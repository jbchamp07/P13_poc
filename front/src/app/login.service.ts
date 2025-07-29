import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = 'http://localhost:8080/login';

  constructor(private http: HttpClient) {}

  
  loginAdmin(username: string, password: string): Observable<boolean> {
    const body = { login: username, password: password };
    return this.http.post<boolean>(this.apiUrl, body);
  }
}
