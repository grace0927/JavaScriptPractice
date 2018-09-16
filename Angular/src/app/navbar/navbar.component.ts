import { Component, OnInit } from '@angular/core';
import { NavItem } from '../navitem';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  navItems: NavItem[] = [
    { id: 100, title: 'Home' },
    { id: 101, title: 'Blogs' },
    { id: 102, title: 'About Me' },
    { id: 103, title: 'Contact Me' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
