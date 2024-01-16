import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Student } from '../models/student.model';
import { Teacher } from '../models/teacher.model';


@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  private baseUrl = 'http://localhost:8080/api/teachers'; 

  constructor(private http: HttpClient) { }

  getAllEtudiants(): Observable<Student[]> {
    return this.http.get<Teacher[]>(this.baseUrl)
  }


  getEtudiantById(id: number): Observable<Teacher> {
    return this.http.get<Teacher>(`${this.baseUrl}/${id}`);
  }

  createEtudiant(etudiant: Teacher): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, etudiant);
  }

  updateEtudiant(id: number, etudiant: Teacher): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, etudiant);
  }

  deleteEtudiant(id: number): Observable<Object> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}