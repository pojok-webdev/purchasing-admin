import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
obj = []
  constructor(private route:ActivatedRoute,private user:UserService) {
    console.log("ID",this.route.snapshot.params.id)
    user.getUser({id:this.route.snapshot.params.id},result=>{
      this.obj = result[0]
    }) 
  }
  updateUser = obj => {
    this.user.updateUser(obj,result=>{
      console.log("Success update user",result)
      window.location.href = '/users'
    })
  }
  ngOnInit() {
  }

}
