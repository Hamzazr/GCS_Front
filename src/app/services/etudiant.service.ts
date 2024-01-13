import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Etudiant } from '../models/etudiant.model';


@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
  private baseUrl = 'http://localhost:8080/api/Etudiants'; 

  constructor(private http: HttpClient) { }

  getAllEtudiants(): Observable<Etudiant[]> {
    return this.http.get<Etudiant[]>(this.baseUrl);
  }

  getEtudiantById(id: number): Observable<Etudiant> {
    return this.http.get<Etudiant>(`${this.baseUrl}/${id}`);
  }

  createEtudiant(etudiant: Etudiant): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, etudiant);
  }

  updateEtudiant(id: number, etudiant: Etudiant): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, etudiant);
  }

  deleteEtudiant(id: number): Observable<Object> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}