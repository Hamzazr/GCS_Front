import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CoursService } from '../../../services/cours.service';

@Component({
  selector: 'app-cours-edit',
  templateUrl: './cours-edit.component.html',
  styleUrl: './cours-edit.component.scss'
})
export class CoursEditComponent implements OnInit {
  coursForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private coursService: CoursService
  ) {}

  ngOnInit(): void {
    this.coursForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
    });
  }
  onSubmit(): void {
    if (this.coursForm.valid) {
      const courseId = this.coursForm.get('id')!.value;
      this.coursService.updateCours(courseId, this.coursForm.value).subscribe({
        next: (res) => {
          console.log('Cours edit successfully!', res);
          // Redirect or show a success message
        },
        error: (err) => {
          console.error('Error Editing Cours', err);
          // Show an error message
        }
      });
    }
  }
}
