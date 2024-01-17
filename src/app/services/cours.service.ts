import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cours } from '../models/cours.model';
import { CoursEditComponent } from '../components/cours/cours-edit/cours-edit.component';
import { NzModalService } from 'ng-zorro-antd/modal';

@Injectable({
  providedIn: 'root'
})
export class CoursService {

  private baseUrl = 'http://localhost:8080/api/courses'; 

  constructor(private http: HttpClient) { }

  getAllCours(): Observable<Cours[]> {
    return this.http.get<Cours[]>(this.baseUrl)
  }


  getCoursById(id: number): Observable<Cours> {
    return this.http.get<Cours>(`${this.baseUrl}/${id}`);
  }

  createCours(cour: Cours): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, cour);
  }

  updateCours(id: number, cour: Cours): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, cour);
  }

  deleteCours(id: number): Observable<Object> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  

}
