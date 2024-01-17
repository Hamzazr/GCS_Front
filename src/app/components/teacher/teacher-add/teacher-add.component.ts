import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TeacherService } from '../../../services/teacher.service';

@Component({
  selector: 'app-teacher-add',
  templateUrl: './teacher-add.component.html',
  styleUrl: './teacher-add.component.scss'
})
export class TeacherAddComponent implements OnInit {
  teacherForm!: FormGroup;
  selectedValue = null;

  constructor(
    private formBuilder: FormBuilder,
    private teacherService: TeacherService
  ) {}

  ngOnInit(): void {
    this.teacherForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      speciality: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.teacherForm.valid) {
      this.teacherService.createTeacher(this.teacherForm.value).subscribe({
        next: (res) => {
          console.log('Prof added successfully!', res);
          // Redirect or show a success message
        },
        error: (err) => {
          console.error('Error adding Prof', err);
          // Show an error message
        }
      });
    }
  }
}
