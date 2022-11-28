import { Component, VERSION, Type } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  navLinks: any[] = [
    { title: 'Videos' },
    { title: 'People' },
    { title: 'Documents' },
    { title: 'Events' },
    { title: 'Communities' },
    { title: 'Favorites' },
    { title: 'Channels' },
  ];
  users: {
    FirstName: 'Waseem';
    LastName: 'Ahmad';
  };
  notification: {
    profileBadge: 53;
  };
}
export default AppComponent;
