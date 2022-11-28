import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor() {}
  navLinks: any[] = [
    { title: 'Videos' },
    { title: 'People' },
    { title: 'Documents' },
    { title: 'Events' },
    { title: 'Communities' },
    { title: 'Favorites' },
    { title: 'Channels' },
  ];
  ngOnInit() {}
}
