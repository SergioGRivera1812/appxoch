import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toogle',
  templateUrl: './toogle.component.html',
  styleUrls: ['./toogle.component.css']
})
export class ToogleComponent {
  constructor(private router: Router){}
  isMenuOpen: boolean = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  onLogoutClick(): void {
    this.router.navigate([''])
  }
}
