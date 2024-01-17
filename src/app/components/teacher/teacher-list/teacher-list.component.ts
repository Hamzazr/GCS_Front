import { Component } from '@angular/core';
import { Teacher } from '../../../models/teacher.model';
import { TeacherService } from '../../../services/teacher.service';

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrl: './teacher-list.component.scss'
})
export class TeacherListComponent {
  teachers !: Teacher[];

  constructor(private teacherService: TeacherService) { }

  ngOnInit(): void {
    this.retrieveTeachers();
  }

  retrieveTeachers(): void{
    this.teacherService.getAllTeacher()
      .subscribe({
        next: (data) => {
          this.teachers = data;
        },
        error: (e) => console.error(e)
      });
  }

  deleteteachers(id: number): void {
    this.teacherService.deleteTeacher(id)
      .subscribe({
        next: (data) => {
          console.log(data);
          this.retrieveTeachers();
        },
        error: (e) => console.error(e)
      });
  }
}
