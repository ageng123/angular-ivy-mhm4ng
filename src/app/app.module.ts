import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatFormFieldControl } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import {
  VideoComponentsComponent,
  PeopleComponent,
  DocumentsComponent,
  ChannelComponent,
  ActivityComponent,
  NavbarComponent,
  HeaderComponent,
} from '../components';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatBadgeModule,
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    VideoComponentsComponent,
    PeopleComponent,
    DocumentsComponent,
    ChannelComponent,
    ActivityComponent,
    NavbarComponent,
    HeaderComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
