import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { LoginUser } from 'src/app/login-user';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  user : User = new User();
  constructor(private router : Router, private userService: UserService) { }

  ngOnInit() {
  }

  createUser() : void{
    this.userService.createUser(this.user).subscribe( data => {
      alert("User created Successfully.");
    });
  };

}
