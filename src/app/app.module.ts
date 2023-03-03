import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SobreMiComponent } from './components/sobre-mi/sobre-mi.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { HomeComponent } from './components/home/home.component';
import { SkillsComponent } from './components/skills/skills.component';
import { TecnologiasComponent } from './components/tecnologias/tecnologias.component';
import { ExpComponent } from './components/exp/exp.component';
import { LoginComponent } from './components/login/login.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SobreMiComponent,
    CarouselComponent,
    ContactoComponent,
    HomeComponent,
    SkillsComponent,
    TecnologiasComponent,
    ExpComponent,
    LoginComponent,
    AuthenticationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
