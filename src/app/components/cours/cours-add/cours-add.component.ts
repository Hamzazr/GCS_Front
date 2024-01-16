import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CoursService } from '../../../services/cours.service';

@Component({
  selector: 'app-cours-add',
  templateUrl: './cours-add.component.html',
  styleUrl: './cours-add.component.scss'
})
export class CoursAddComponent implements OnInit {
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
      this.coursService.createCours(this.coursForm.value).subscribe({
        next: (res) => {
          console.log('Cours added successfully!', res);
          // Redirect or show a success message
        },
        error: (err) => {
          console.error('Error adding Cours', err);
          // Show an error message
        }
      });
    }
  }
}
