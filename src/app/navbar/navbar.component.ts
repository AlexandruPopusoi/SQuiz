import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet, NgClass],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isHidden = true;
  navLinks = [
    { title: 'Home', url: '/app-main-page' },
    { title: 'Modes', url: '/app-modes-page' },
    { title: 'Create', url: '/app-create-page' },
    { title: 'About', url: '/app-about-page' }
  ];

  triggerNavbar(){
    if(this.isHidden === false) this.isHidden = true 
    else this.isHidden = false 
  }
}
