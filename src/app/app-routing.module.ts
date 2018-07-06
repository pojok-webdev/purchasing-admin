import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserSetpasswordComponent } from './user-setpassword/user-setpassword.component';


const routes  : Routes = [
  {path: 'users',component: UsersComponent},
  {path: 'useredit/:id',component: UserEditComponent},
  {path: 'usersetpassword/:id',component: UserSetpasswordComponent}
]
@NgModule({
  imports:[
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
