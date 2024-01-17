import { Component, OnInit, Injectable } from '@angular/core';
import { CoursService } from '../../../services/cours.service';
import { Cours } from '../../../models/cours.model';
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { TeacherAddComponent } from '../../teacher/teacher-add/teacher-add.component';
import { CoursEditComponent } from '../cours-edit/cours-edit.component';


@Component({
  selector: 'app-cours-list',
  templateUrl: './cours-list.component.html',
  styleUrl: './cours-list.component.scss'
})
export class CoursListComponent implements OnInit {
  
  cours!: Cours[];

  constructor(private router: Router, private coursService: CoursService) { }

  ngOnInit(): void { 
    this.retrieveCours();
  }

  showEditCour(id: number): void {
    console.log(id); // Check if id is defined
    this.router.navigate(['../EditC/', id])
      .then(success => console.log('Navigation success:', success))
      .catch(error => console.error('Navigation error:', error));
}

  retrieveCours(): void{
    this.coursService.getAllCours()
      .subscribe({
        next: (data) => {
          this.cours = data;
        },
        error: (e) => console.error(e)
      });
  }

  deleteCours(id: number): void {
    this.coursService.deleteCours(id)
      .subscribe({
        next: (data) => {
          console.log(data);
          this.retrieveCours();
        },
        error: (e) => console.error(e)
      });
  }
  

  

  
  
  

 
  
}
