import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/table';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
displayedColumns = ['username','email','active','actions']
dataSource = []
  constructor(private users:UserService) {
    this.users.getUsers(result=>{
      this.dataSource = result
    })
  }

  ngOnInit() {
  }

}
