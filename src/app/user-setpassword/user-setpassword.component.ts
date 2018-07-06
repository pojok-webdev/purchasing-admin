import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-user-setpassword',
  templateUrl: './user-setpassword.component.html',
  styleUrls: ['./user-setpassword.component.css']
})
export class UserSetpasswordComponent implements OnInit {
user = {}
  constructor(private route:ActivatedRoute,  private userService:UserService) {
    this.userService.getUser({id:this.route.snapshot.params.id},result=>{
      console.log("Result",result[0])
      this.user = result[0]
    })

  }
  updatePassword(obj){}
  ngOnInit() {
  }

}
