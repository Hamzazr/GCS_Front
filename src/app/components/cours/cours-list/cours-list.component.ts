import { Component, OnInit } from '@angular/core';
import { CoursService } from '../../../services/cours.service';
import { Cours } from '../../../models/cours.model';


@Component({
  selector: 'app-cours-list',
  templateUrl: './cours-list.component.html',
  styleUrl: './cours-list.component.scss'
})
export class CoursListComponent implements OnInit {
  cours!: Cours[];

  constructor(private coursService: CoursService) { }

  ngOnInit(): void {
    
  }

  
}
