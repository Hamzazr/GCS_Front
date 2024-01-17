import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CoursService } from '../../../services/cours.service';
import { ActivatedRoute } from '@angular/router';
import { EtudiantService } from '../../../services/etudiant.service';
import { TeacherService } from '../../../services/teacher.service';
import { Cours } from '../../../models/cours.model';
import { Teacher } from '../../../models/teacher.model';
import { Student } from '../../../models/student.model';
import { GroupsService } from '../../../services/groups.service';

@Component({
  selector: 'app-groups-edit',
  templateUrl: './groups-edit.component.html',
  styleUrl: './groups-edit.component.scss'
})
export class GroupsEditComponent implements OnInit {
  groupeForm!: FormGroup;
  groupId!: number;
  selectedStudents!: number[];
  cours!: Cours[];
  teachers!: Teacher[];
  students!: Student[];

  constructor(
    private formBuilder: FormBuilder,
    private coursService: CoursService,
    private groupService: GroupsService,
    private route : ActivatedRoute,
    private teachersService: TeacherService,
    private studentsService: EtudiantService,
  ) {}

  ngOnInit(): void {
    this.retrieveCours();
    this.retrieveTeachers();
    this.retrieveStudents();
    this.groupId = +this.route.snapshot.paramMap.get('id')!;
    this.groupeForm = this.formBuilder.group({
      title: ['', Validators.required],
      cour: ['', Validators.required],
      teacher: ['', Validators.required],
    });
    
    this.groupService.getGroupeById(this.groupId).subscribe(group => {
      this.groupeForm.patchValue({
        title: group.name,
        cour: group.course,
        teacher: group.teacher,
        

      });
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
    console.log(event)
    this.selectedStudents = event;
  
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
    this.teachersService.getAllTeacher()
      .subscribe({
        next: (data) => {
          this.teachers = data;
        },
        error: (e) => console.error(e)
      });
  }

  onSubmit(): void {
    if (this.groupeForm.valid) {
      //const courseId = this.coursForm.get('id')!.value;
      this.groupService.updateGroupe(this.groupId, this.groupeForm.value).subscribe({
        next: (res) => {
          console.log('Groupe edit successfully!', res);
          // Redirect or show a success message
        },
        error: (err) => {
          console.error('Error Editing Groupe', err);
          // Show an error message
        }
      });
    }
  }
}
