import { Injectable } from '@angular/core';
import { userData } from './usersData';
import { Observable, of } from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  getUsers(): Observable<any> {
    return of(userData);
  } 
}

