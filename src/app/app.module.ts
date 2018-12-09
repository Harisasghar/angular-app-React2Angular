import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatTableModule, MatProgressBarModule} from '@angular/material';
import { AppComponent } from './app';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserDetails } from './users/UserDetails';
import { Systems } from './users/systems';
import {RouterModule} from '@angular/router';
import { Users } from './users/users';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UserDetails,
    Users,
    Systems
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatProgressBarModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '', redirectTo: '/users', pathMatch: 'full'},
      {path: 'users', component: Users},
      {path: 'userdetails/:id', component: UserDetails}
  ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
