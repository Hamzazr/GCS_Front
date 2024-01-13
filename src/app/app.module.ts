import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EtudiantListComponent } from './components/etudiant-list/etudiant-list.component';
import { EtudiantAddComponent } from './components/etudiant-add/etudiant-add.component';
import { EtudiantEditComponent } from './components/etudiant-edit/etudiant-edit.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { IconsProviderModule } from './icons-provider.module';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { AcceuilComponent } from './components/acceuil/acceuil.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { LoginComponent } from './components/login/login.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzSelectModule } from 'ng-zorro-antd/select';



registerLocaleData(en); 

@NgModule({
  declarations: [
    AppComponent,
    EtudiantListComponent,
    EtudiantAddComponent,
    EtudiantEditComponent,
    AcceuilComponent,
    LoginComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    ReactiveFormsModule, 
    FormsModule, 
    BrowserAnimationsModule, 
    NzLayoutModule, 
    IconsProviderModule, 
    NzMenuModule,
    NzTableModule,
    NzFormModule,
    NzButtonModule,
    NzInputModule,
    NzTypographyModule,
    NzAvatarModule,
    NzSelectModule
   
  ],
  providers: [
    provideHttpClient(withFetch()),
    { provide: NZ_I18N, useValue: en_US },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
