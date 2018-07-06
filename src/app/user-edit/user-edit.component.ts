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
  constructor(private route:ActivatedRoute,user:UserService) {
    console.log("ID",route.snapshot.params.id)
    user.getUser({id:route.snapshot.params.id},result=>{
      this.obj = result[0]
    }) 
  }

  ngOnInit() {
  }

}
