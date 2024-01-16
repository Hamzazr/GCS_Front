// src/app/components/etudiant-list/etudiant-list.component.ts

import { ChangeDetectorRef, Component, OnInit, NgZone } from '@angular/core';
import { Student } from '../../../models/student.model';
import { EtudiantService } from '../../../services/etudiant.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-etudiant-list',
  templateUrl: './etudiant-list.component.html',
  styleUrls: ['./etudiant-list.component.scss']
})
export class EtudiantListComponent implements OnInit {
  etudiants !: Student[];

  constructor(private etudiantService: EtudiantService, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.retrieveEtudiants();
  }

  retrieveEtudiants(): void{
    this.etudiantService.getAllEtudiants()
      .subscribe({
        next: (data) => {
          this.etudiants = data;
          this.cdr.detectChanges();
        },
        error: (e) => console.error(e)
      });
  }

  deleteEtudiant(id: number): void {
    this.etudiantService.deleteEtudiant(id)
      .subscribe({
        next: (data) => {
          console.log(data);
          this.retrieveEtudiants();
        },
        error: (e) => console.error(e)
      });
  }
}
