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
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      filiere: ['', Validators.required],
      groupe: ['', Validators.required],
      tele: [''],
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