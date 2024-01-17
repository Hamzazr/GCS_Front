import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EtudiantListComponent } from './components/etudiants/etudiant-list/etudiant-list.component';
import { EtudiantAddComponent } from './components/etudiants/etudiant-add/etudiant-add.component';
import { EtudiantEditComponent } from './components/etudiants/etudiant-edit/etudiant-edit.component';
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
import { PieChartOutline, LogoutOutline, TeamOutline, UserOutline } from '@ant-design/icons-angular/icons';
import { NZ_ICONS } from 'ng-zorro-antd/icon';
import { HomePageComponent } from './components/home-page/home-page.component';
import { CoursListComponent } from './components/cours/cours-list/cours-list.component';
import { CoursAddComponent } from './components/cours/cours-add/cours-add.component';
import { CoursEditComponent } from './components/cours/cours-edit/cours-edit.component';
import { GroupsAddComponent } from './components/group/groups-add/groups-add.component';
import { GroupsEditComponent } from './components/group/groups-edit/groups-edit.component';
import { GroupsListComponent } from './components/group/groups-list/groups-list.component';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { TeacherAddComponent } from './components/teacher/teacher-add/teacher-add.component';
import { TeacherListComponent } from './components/teacher/teacher-list/teacher-list.component';
import { TeacherEditComponent } from './components/teacher/teacher-edit/teacher-edit.component';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { StatComponent } from './components/static/stat/stat.component';
import { NzCalendarModule } from 'ng-zorro-antd/calendar';


registerLocaleData(en); 
const icons = [PieChartOutline, LogoutOutline, TeamOutline, UserOutline];

@NgModule({
  declarations: [
    AppComponent,
    EtudiantListComponent,
    CoursListComponent,
    CoursAddComponent,
    EtudiantAddComponent,
    EtudiantEditComponent,
    AcceuilComponent,
    LoginComponent,
    SignUpComponent,
    HomePageComponent,
    CoursEditComponent,
    GroupsEditComponent,
    GroupsAddComponent,
    GroupsListComponent,
    TeacherAddComponent,
    TeacherListComponent,
    TeacherEditComponent,
    StatComponent
  ],
  imports: [
    NzModalModule,
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
    NzSelectModule,
    NzCheckboxModule,
    NzModalModule,
    NzCalendarModule
   
  ],
  providers: [
    provideHttpClient(withFetch()),
    { provide: NZ_I18N, useValue: en_US },
    { provide: NZ_ICONS, useValue: icons }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
