import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Teacher } from '../models/teacher.model';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  private baseUrl = 'http://localhost:8080/api/teachers'; 

  constructor(private http: HttpClient) { }

  getAllEtudiants(): Observable<Teacher[]> {
    return this.http.get<Teacher[]>(this.baseUrl)
  }


  getEtudiantById(id: number): Observable<Teacher> {
    return this.http.get<Teacher>(`${this.baseUrl}/${id}`);
  }

  createEtudiant(teacher: Teacher): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, teacher);
  }

  updateEtudiant(id: number, teacher: Teacher): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, teacher);
  }

  deleteEtudiant(id: number): Observable<Object> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
