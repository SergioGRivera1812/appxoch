import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private router: Router){}

  btnVideo(){
    this.router.navigate(['video']);
  }
  btnNotas(){
    this.router.navigate(['notas']);
  }

  btnImagenes(){
    this.router.navigate(['imagenes']);
  }
}
