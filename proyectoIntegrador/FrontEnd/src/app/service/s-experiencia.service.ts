import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Experiencia } from '../model/experiencia';

@Injectable({
  providedIn: 'root'
})
export class SExperienciaService {
  expURL = 'https://localhost:8080/explab'

  constructor(private httpClient: HttpClient) { }
  public lista(): Observable<Experiencia>
}
