import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CoursService } from '../../../services/cours.service';
import { Cours } from '../../../models/cours.model';
import { Teacher } from '../../../models/teacher.model';
import { TeacherService } from '../../../services/teachers.service';
import { EtudiantService } from '../../../services/etudiant.service';
import { Student } from '../../../models/student.model';
import { GroupsService } from '../../../services/groups.service';
import { Group } from '../../../models/group.model';

@Component({
  selector: 'app-groups-add',
  templateUrl: './groups-add.component.html',
  styleUrl: './groups-add.component.scss'
})
export class GroupsAddComponent implements OnInit {
  form!: FormGroup;
  selectedStudents!: Student[];
  cours!: Cours[];
  teachers!: Teacher[];
  students!: Student[];

  cour!: number; // Assuming lucy is the ngModel variable

  constructor(
    private formBuilder: FormBuilder,
    private groupsService: GroupsService,
    private coursService: CoursService,
    private teachersService: TeacherService,
    private studentsService: EtudiantService,
  ) {}

  ngOnInit(): void {
    this.retrieveCours();
    this.retrieveTeachers();
    this.retrieveStudents();
    this.form = this.formBuilder.group({
      title: ['', Validators.required],
      cour: ['', Validators.required],
      teacher: ['', Validators.required],
      students: ['', Validators.required],

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

  checkValue(event: any){
    console.log(event);
  
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
    console.log("cour ",this.form)
    this.groupsService.createCours(
      new Group(0, this.form.value.title , {"id":this.form.value.cour}, {"id":this.form.value.teacher}, this.selectedStudents ?? [])
    ) .subscribe({
      next: (data) => {
      },
      error: (e) => console.error(e)
    });
  }
}
