// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Componentes/dashboard/dashboard.component'; 
import { LoginComponent } from './Componentes/login/login.component';
import { ImagenesComponent } from './Componentes/imagenes/imagenes.component';
import { VideoComponent } from './Componentes/video/video.component';
 

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'imagenes', component: ImagenesComponent },
  { path: 'video', component: VideoComponent },

  // Otras rutas...
  { path: '**', redirectTo: '' }, // Redirige rutas desconocidas a la página de inicio
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
