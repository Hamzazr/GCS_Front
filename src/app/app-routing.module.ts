import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EtudiantAddComponent } from './components/etudiants/etudiant-add/etudiant-add.component';
import { EtudiantListComponent } from './components/etudiants/etudiant-list/etudiant-list.component';
import { EtudiantEditComponent } from './components/etudiants/etudiant-edit/etudiant-edit.component';
import { AcceuilComponent } from './components/acceuil/acceuil.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { CoursListComponent } from './components/cours/cours-list/cours-list.component';
import { CoursAddComponent } from './components/cours/cours-add/cours-add.component';
import { CoursEditComponent } from './components/cours/cours-edit/cours-edit.component';
import { GroupsAddComponent } from './components/group/groups-add/groups-add.component';
import { GroupsEditComponent } from './components/group/groups-edit/groups-edit.component';
import { GroupsListComponent } from './components/group/groups-list/groups-list.component';
import { TeacherAddComponent } from './components/teacher/teacher-add/teacher-add.component';
import { TeacherEditComponent } from './components/teacher/teacher-edit/teacher-edit.component';
import { TeacherListComponent } from './components/teacher/teacher-list/teacher-list.component';
import { StatComponent } from './components/static/stat/stat.component';

const routes: Routes = [

  {
    path:'home',
    component: HomePageComponent
  },


  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'signup',
    component:SignUpComponent
  },

  {
    path: 'dashbord',  
    component: AcceuilComponent,
    children: [
      {
        path:'',
        component: StatComponent
      },
      {
        path:'AddE', 
        component: EtudiantAddComponent
      },
      {
        path:'listE', 
        component: EtudiantListComponent
      },
      {
        path:'EditE/:id',
        component: EtudiantEditComponent,
        pathMatch: 'full'
      },
      {
        path:'groupsadd', 
        component: GroupsAddComponent
      },
      {
        path:'groups', 
        component: GroupsListComponent
      },
      {
        path:'EditG/:id',
        component: GroupsEditComponent
      },
      {
        path:'listC',
        component: CoursListComponent
      },
      {
        path: 'EditC/:id',
        component: CoursEditComponent
      },
      {
        path:'AddC', 
        component: CoursAddComponent
      },
      {
        path:'AddT', 
        component: TeacherAddComponent
      },
      {
        path:'listT', 
        component: TeacherListComponent
      },
      {
        path:'EditT/:id',
        component: TeacherEditComponent
      },
    ],
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
