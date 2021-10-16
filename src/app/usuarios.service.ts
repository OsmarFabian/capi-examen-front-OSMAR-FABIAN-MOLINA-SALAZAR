import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  private apiURL = 'http://127.0.0.1:8000/users';
  constructor(private http: HttpClient) {}
  getProducts(): Observable<any> {
    return this.http.get(this.apiURL);
  }
}
