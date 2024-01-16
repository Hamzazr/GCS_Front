import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Student } from '../models/student.model';


@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
  private baseUrl = 'http://localhost:8080/api/students'; 

  constructor(private http: HttpClient) { }

  getAllEtudiants(): Observable<Student[]> {
    return this.http.get<Student[]>(this.baseUrl)
  }


  getEtudiantById(id: number): Observable<Student> {
    return this.http.get<Student>(`${this.baseUrl}/${id}`);
  }

  createEtudiant(etudiant: Student): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, etudiant);
  }

  updateEtudiant(id: number, etudiant: Student): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, etudiant);
  }

  deleteEtudiant(id: number): Observable<Object> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}