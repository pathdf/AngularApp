import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { LoginComponent } from 'src/app/login/login.component';


const routes : Routes=[
 {path : '', redirectTo : "/login", pathMatch : "full"  },
  {path : 'users', component : UserComponent},
  {path : 'add', component : AddUserComponent},
  {path : 'login', component : LoginComponent}
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports :[
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
