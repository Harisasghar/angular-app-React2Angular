import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/services/users.service';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <router-outlet></router-outlet>
  </div>
  `
})
export class AppComponent {
  constructor(){}
}