import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent implements OnInit{

  registerForm!: FormGroup;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }
 
  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      nom: [null, [Validators.required]],
      prenom: [null, [Validators.required]],
      email: [null, [
        Validators.required,
        Validators.email,
        Validators.minLength(6)
      ]],
      ecole: [null, [Validators.required]],
      ville: [null, [Validators.required]],
      password: [null, [
        Validators.required,
        Validators.minLength(3),
        //CustomValidators.passwordContainsNumber
      ]]
    })
  }
}
