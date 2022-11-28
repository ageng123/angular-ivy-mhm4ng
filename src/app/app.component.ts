import { Component, VERSION, Type } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  user: {
    FirstName: 'Waseem';
    LastName: 'Ahmad';
  };
  notification: {
    profileBadge: 53;
  };
}
export default AppComponent;
