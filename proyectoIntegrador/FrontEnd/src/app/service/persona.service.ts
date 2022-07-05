import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  URL = 'http://localhost:8080/personas/';

  constructor(private http: HttpClient) { }

/*   public getPersona(): Observable<persona>{ //ESTÁ MAL
     return this.http.get<persona>(this.URL +'traer/perfil'); // ESTO ESTÁ MAL
    
  } */

  getPersona(){
    return this.http.get(`${this.URL}traer`)
  }
}
