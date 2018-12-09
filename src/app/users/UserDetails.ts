import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { userData } from 'src/services/usersData';

@Component({
  selector: 'app-user-details',
  template: `
  <style>
    .user-field{
      width: 30%;
      border-bottom: solid 1px lightgray;
      margin: 1rem;
      height: 2rem;
    }

    .user-field input{
        height: 2rem;
        font-size: 22px;
        border: none;
        background-color: rgb(218, 243, 252);
        width: 100%;
    }
</style>
  <div [ngStyle]="{'display': 'flex'}">
    <div class="user-field">{{user.id}}</div>
    <div class="user-field">{{user.name}}</div>
    <div class="user-field">{{user.age}}</div>
  </div>
  <div [ngStyle]="{'display': 'flex'}">
    <div class="user-field">
      <input [(ngModel)]="user.title"/>
    </div>
    <div class="user-field">
      <input [(ngModel)]="user.address" />
    </div>
    <div class="user-field">
      <input [ngModel]="user.postnummer" (ngModelChange)="user.postnummer=$event"/>
    </div>
  </div>
  <div [ngStyle]="{'display': 'flex'}">
    <div class="user-field">{{user.mobile}}</div>
  </div>
  <app-systems *ngIf="user.registeredIn.length > 0" [userSystems]="user.registeredIn"></app-systems>
  `,
})

export class UserDetails implements OnInit {
  user : any;

  constructor(private activeRoute: ActivatedRoute) { 
    this.user = {};
  }

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      this.user = userData.filter(x => x.id == params["id"])[0];
    });
  }
}
