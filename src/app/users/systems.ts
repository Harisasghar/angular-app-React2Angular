import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-systems',
  template: `
  <style>
    .systems-table{
      width: 80%;
    }
    .systems-table tr {
        text-align: left;
    }  
    .systems-table td,th {
        border-bottom: solid 1px lightblue;
    }   
  </style>
  <h3>User systems:</h3>
  <table class="systems-table">
    <tbody>
      <tr>
        <th>System Id</th>
        <th>System Name</th>
      </tr>
      <tr class="table-row" *ngFor="let system of userSystems">
        <td>{{system.id}}</td>
        <td>{{system.name}}</td>
      </tr>
    </tbody>
  </table>
  `
})
export class Systems implements OnInit {

  @Input() userSystems;

  constructor() {}
  ngOnInit() {}
}
