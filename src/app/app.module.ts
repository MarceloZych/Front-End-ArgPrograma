import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SobreMiComponent } from './components/sobre-mi/sobre-mi.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { HomeComponent } from './components/home/home.component';
import { SkillsComponent } from './components/skills/skills.component';
import { TecnologiasComponent } from './components/tecnologias/tecnologias.component';
import { ExpComponent } from './components/exp/exp.component';
import { LoginComponent } from './components/login/login.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LenguageComponent } from './components/lenguage/lenguage.component';
import { NewExpComponent } from './components/exp/new-exp.component';
import { EditExpComponent } from './components/exp/edit-exp.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SobreMiComponent,
    ContactoComponent,
    HomeComponent,
    SkillsComponent,
    TecnologiasComponent,
    ExpComponent,
    LoginComponent,
    AuthenticationComponent,
    LenguageComponent,
    NewExpComponent,
    EditExpComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
