import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { userData} from '../../services/usersData';

@Component({
  selector: 'app-users',
  template: `
  <style>
    .table-full-width{
      width: 80%;
    }

    .table-full-width .table-row{
        cursor: pointer;
    }
    .table-full-width .table-row:hover{
        background-color: lightblue;
    }
    .table-full-width tr {
        text-align: left;
    }
  </style>
  <mat-progress-bar mode="indeterminate" *ngIf="!dataLoaded" class="table-full-width"></mat-progress-bar>
  <table class="table-full-width">
    <tbody>
      <tr>
        <th>Name</th><th>Title</th><th>Systems</th>
      </tr>
      <tr class="table-row" *ngFor="let row of users" [routerLink]="['/userdetails', row.id]">
        <td>{{row.name}}</td>
        <td>{{row.title}}</td>
        <td>{{row.registeredIn.length}}</td>
      </tr>
    </tbody>
  </table>
  `
})

export class Users implements OnInit {
  users = [];
  dataLoaded = false;

  constructor(){}

  ngOnInit(): void {
    setTimeout(() => {
      this.users = userData;
      this.dataLoaded = true;
		
		}, 1000);
  }
}

// constructor(private userService: UsersService){}
// this.userService.getUsers()
// this.http.get(url, { headers: this.setHeaders() })
// of(userData).subscribe(async data => {
//   this.users = data;
//   this.dataLoaded = true;
// });