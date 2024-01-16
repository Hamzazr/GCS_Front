import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CoursService } from '../../../services/cours.service';
import { Cours } from '../../../models/cours.model';
import { Teacher } from '../../../models/teacher.model';
import { TeacherService } from '../../../services/teachers.service';
import { EtudiantService } from '../../../services/etudiant.service';
import { Student } from '../../../models/student.model';

@Component({
  selector: 'app-groups-add',
  templateUrl: './groups-add.component.html',
  styleUrl: './groups-add.component.scss'
})
export class GroupsAddComponent implements OnInit {
  coursForm!: FormGroup;
  cours!: Cours[];
  teachers!: Teacher[];
  students!: Student[];

  cour!: number; // Assuming lucy is the ngModel variable

  constructor(
    private formBuilder: FormBuilder,
    private coursService: CoursService,
    private teachersService: TeacherService,
    private studentsService: EtudiantService,
  ) {}

  ngOnInit(): void {
    this.retrieveCours();
    this.retrieveTeachers();
    this.retrieveStudents();
    this.coursForm = this.formBuilder.group({
      title: ['', Validators.required],
      cour: ['', Validators.required],
    });
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

  retrieveStudents(): void{
    this.studentsService.getAllEtudiants()
      .subscribe({
        next: (data) => {
          this.students = data;
        },
        error: (e) => console.error(e)
      });
  }

  retrieveTeachers(): void{
    this.teachersService.getAllEtudiants()
      .subscribe({
        next: (data) => {
          this.teachers = data;
        },
        error: (e) => console.error(e)
      });
  }

  onSubmit(): void {
    if (this.coursForm.valid) {
      console.log("cour ",this.coursForm)

    }
  }
}
