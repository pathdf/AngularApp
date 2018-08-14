import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { LoginUser } from 'src/app/login-user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user : LoginUser = new LoginUser();
 public  validatedUser : LoginUser = null;
 public feed : boolean = true;
  constructor(private userService: UserService,private router : Router){}

  ngOnInit() {
  }

  validateUser(){
    this.userService.validateUser(this.user).subscribe(data =>{this.validatedUser=data;
     if(this.validatedUser == null){
       this.feed=false;
       
     }else if(!this.validatedUser.loginStatus){
       this.feed = true;
       
     }
     else{
         this.feed = true;
         this.router.navigate(["add"]); 
       }
   } );
   
 };

 
}
