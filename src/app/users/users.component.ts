import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
displayedColumns = ['username','email','level','active','actions']
dataSource = []
  constructor(private users:UserService) {
    this.users.getUsers(result=>{
      this.dataSource = result
    })
  }
  userDelete(obj){
    obj.active = "0"
    this.users.updateUser(obj,result=>{
      console.log("Success delete user",result)
    })
  }
  ngOnInit() {
  }

}
