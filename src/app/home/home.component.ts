import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { IUsersResult } from '../utils/interface-classes';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  users : IUsersResult[] = [];
  rows : number = 0;
  totalRecords : number = 0;
  cols = [
    { field: 'name', header: 'Name' },
    { field: 'email', header: 'Email' },
    { field: 'isActive', header: 'Status' },
  ];

  constructor(private appService : AppService) { }

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers(event? : any) {
    this.appService.getAllUsers().subscribe({
      next : (res) => {
        this.users = res.data;
        this.users.forEach(ele => {ele['isActive'] = ele.isActive ? 'Active' : 'Inactive'})
        this.rows = this.users.length;
        this.totalRecords = this.rows;
        console.log(res);
      },
      error : (err : HttpErrorResponse) => {
        console.error(err);
      }
    });
  }

  customSort(event : any) {
  }
}
