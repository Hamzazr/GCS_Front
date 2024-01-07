import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EtudiantAddComponent } from './components/etudiant-add/etudiant-add.component';
import { EtudiantListComponent } from './components/etudiant-list/etudiant-list.component';
import { EtudiantEditComponent } from './components/etudiant-edit/etudiant-edit.component';
import { AcceuilComponent } from './components/acceuil/acceuil.component';

const routes: Routes = [

  {
    path: '',  
    component: AcceuilComponent,
    children: [
      {
        path:'AddE', 
        component: EtudiantAddComponent
      },
      {
        path:'listE', 
        component: EtudiantListComponent
      },
      {
        path:'EditE',
        component: EtudiantEditComponent
      },
    ],
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
