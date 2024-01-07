// src/app/components/etudiant-list/etudiant-list.component.ts

import { Component, OnInit } from '@angular/core';
import { Etudiant } from '../../models/etudiant.model';
import { EtudiantService } from '../../services/etudiant.service';

@Component({
  selector: 'app-etudiant-list',
  templateUrl: './etudiant-list.component.html',
  styleUrls: ['./etudiant-list.component.scss']
})
export class EtudiantListComponent implements OnInit {
  etudiants!: Etudiant[];

  constructor(private etudiantService: EtudiantService) { }

  ngOnInit(): void {
    this.retrieveEtudiants();
  }

  retrieveEtudiants(): void {
    this.etudiantService.getAllEtudiants()
      .subscribe({
        next: (data) => {
          this.etudiants = data;
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
