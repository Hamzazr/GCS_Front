import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cours } from '../models/cours.model';
import { Group } from '../models/group.model';

@Injectable({
  providedIn: 'root'
})
export class GroupsService {

  private baseUrl = 'http://localhost:8080/api/groups'; 

  constructor(private http: HttpClient) { }

  getAllCours(): Observable<Group[]> {
    return this.http.get<Group[]>(this.baseUrl)
  }


  getCoursById(id: number): Observable<Group> {
    return this.http.get<Cours>(`${this.baseUrl}/${id}`);
  }

  createCours(cour: Group): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, cour);
  }

  updateCours(id: number, cour: Group): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, cour);
  }

  deleteCours(id: number): Observable<Object> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
