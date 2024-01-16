import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit{
  isCollapse!: boolean;

  constructor(

  ) { }

  

  ngOnInit() {
  }

  sendNotif() {
    
  }

  toggleCollapse() {
    this.isCollapse = !this.isCollapse
  }


}
