import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrl: './acceuil.component.scss'
})
export class AcceuilComponent{
  showProfileList: boolean = false;
  constructor(private router: Router) {}

  toggleProfileList() {
    this.showProfileList = !this.showProfileList;
  }

}
