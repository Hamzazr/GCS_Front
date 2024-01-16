import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EtudiantService } from '../../services/etudiant.service';

@Component({
  selector: 'app-etudiant-add',
  templateUrl: './etudiant-add.component.html',
  styleUrls: ['./etudiant-add.component.scss']
})
export class EtudiantAddComponent implements OnInit {
  etudiantForm!: FormGroup;
  selectedValue = null;

  constructor(
    private formBuilder: FormBuilder,
    private etudiantService: EtudiantService
  ) {}

  ngOnInit(): void {
    this.etudiantForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit(): void {
    if (this.etudiantForm.valid) {
      this.etudiantService.createEtudiant(this.etudiantForm.value).subscribe({
        next: (res) => {
          console.log('Etudiant added successfully!', res);
          // Redirect or show a success message
        },
        error: (err) => {
          console.error('Error adding etudiant', err);
          // Show an error message
        }
      });
    }
  }
}