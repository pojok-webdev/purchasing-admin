import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {
obj = {}
  constructor(private userService:UserService) { }
  saveUser(obj){
    this.userService.saveUser(obj,result => {
      console.log("Success save user",result)
      window.location.href = '/users'
    })
  }
  ngOnInit() {
  }

}
