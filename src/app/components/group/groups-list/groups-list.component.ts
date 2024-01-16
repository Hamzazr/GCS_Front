import { Component, OnInit } from '@angular/core';
import { CoursService } from '../../../services/cours.service';
import { Cours } from '../../../models/cours.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-groups-list',
  templateUrl: './groups-list.component.html',
  styleUrl: './groups-list.component.scss'
})
export class GroupsListComponent implements OnInit {
  cours!: Cours[];

  constructor(private router : Router, private coursService: CoursService) { }

  ngOnInit(): void {
    this.retrieveCours()
  }

  showEditCour(id: number): void{
    this.router.navigate(['/EditC', id]);
  }

  retrieveCours(): void{
    this.coursService.getAllCours()
      .subscribe({
        next: (data) => {
          this.cours = data;
          console.log("",this.cours)
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
