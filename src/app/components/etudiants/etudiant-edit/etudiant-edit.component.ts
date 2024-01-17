import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EtudiantService } from '../../../services/etudiant.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-etudiant-edit',
  templateUrl: './etudiant-edit.component.html',
  styleUrl: './etudiant-edit.component.scss'
})
export class EtudiantEditComponent implements OnInit {
  etudiantForm!: FormGroup;
  selectedValue = null;
  etudiantId!: number;

  constructor(
    private formBuilder: FormBuilder,
    private etudiantService: EtudiantService,
    private route : ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.etudiantId = +this.route.snapshot.paramMap.get('id')!;
    this.etudiantForm = this.formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      filiere: ['', Validators.required],
      tele: [''],
      email: ['', [Validators.required, Validators.email]]
    });

    this.etudiantService.getEtudiantById(this.etudiantId).subscribe(etud => {
      this.etudiantForm.patchValue({
        nom: etud.lastName,
        prenom: etud.firstName,
        tele: etud.phone,
        email:etud.email

      });
    });
  }

  onSubmit(): void {
    if (this.etudiantForm.valid) {
      //const etudiantId = this.etudiantForm.get('id')!.value;
      this.etudiantService.updateEtudiant(this.etudiantId , this.etudiantForm.value).subscribe({
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
