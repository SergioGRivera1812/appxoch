import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private router: Router){}


  onVideo(){
    this.router.navigate(['video']);
  }

  onImagenes(){
    this.router.navigate(['imagenes']);
  }

  onHome(){
    this.router.navigate(['dashboard']);
  }
}
