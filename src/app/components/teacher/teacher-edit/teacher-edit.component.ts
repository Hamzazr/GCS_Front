import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TeacherService } from '../../../services/teacher.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-teacher-edit',
  templateUrl: './teacher-edit.component.html',
  styleUrl: './teacher-edit.component.scss'
})
export class TeacherEditComponent implements OnInit {
  teacherForm!: FormGroup;
  selectedValue = null;
  teacherId!: number;

  constructor(
    private formBuilder: FormBuilder,
    private teacherService: TeacherService,
    private route : ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.teacherId = +this.route.snapshot.paramMap.get('id')!;
    this.teacherForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      speciality: ['', Validators.required],
    });
    this.teacherService.getTeacherById(this.teacherId).subscribe(prof => {
      this.teacherForm.patchValue({
        firstName: prof.firstName,
        lastName: prof.lastName,
        phone: prof.phone,
        email:prof.email,
        speciality: prof.speciality

      });
    });
  }

  onSubmit(): void {
    if (this.teacherForm.valid) {
      
      this.teacherService.updateTeacher(this.teacherId , this.teacherForm.value).subscribe({
        next: (res) => {
          console.log('Prof added successfully!', res);
          // Redirect or show a success message
        },
        error: (err) => {
          console.error('Error Editing Prof', err);
          // Show an error message
        }
      });
    }
  }
}
