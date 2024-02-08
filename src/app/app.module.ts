import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Componentes/header/header.component'; 
import { LoginComponent } from './Componentes/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';


import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {RouterModule, Routes } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { DashboardComponent } from './Componentes/dashboard/dashboard.component';
import {MatDividerModule} from '@angular/material/divider';
import { ImagenesComponent } from './Componentes/imagenes/imagenes.component';
import {MatMenuModule} from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VideoComponent } from './Componentes/video/video.component';
import { NotesComponent } from './Componentes/notes/notes.component';
import { ToogleComponent } from './Componentes/toogle/toogle.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    DashboardComponent,
    ImagenesComponent,
    VideoComponent,
    NotesComponent,
    ToogleComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
