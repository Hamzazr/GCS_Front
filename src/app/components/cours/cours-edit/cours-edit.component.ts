import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CoursService } from '../../../services/cours.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cours-edit',
  templateUrl: './cours-edit.component.html',
  styleUrl: './cours-edit.component.scss'
})
export class CoursEditComponent implements OnInit {
  coursForm!: FormGroup;
  courseId!: number;
 
  constructor(
    private formBuilder: FormBuilder,
    private coursService: CoursService,
    private route : ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.courseId = +this.route.snapshot.paramMap.get('id')!;

    this.coursForm = this.formBuilder.group({
      id: [null],
      title: ['', Validators.required],
      description: ['', Validators.required],

    });
    this.coursService.getCoursById(this.courseId).subscribe(course => {
      this.coursForm.patchValue({
        title: course.title,
        description: course.description
      });
    });
  }
  onSubmit(): void {
    if (this.coursForm.valid) {
      //const courseId = this.coursForm.get('id')!.value;
      this.coursService.updateCours(this.courseId, this.coursForm.value).subscribe({
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
