import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { error } from 'util';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: User[];
  constructor(private router: Router, private userService : UserService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(data => {
     
      if(error){console.log(error);}
      this.users = data;
    });
  };

  deleteUser(user: User): void{
    this.userService.deleteUser(user).subscribe(data =>{
      this.users = this.users.filter(u => u !== user);
    });
  };

  sorting(){
    this.users=this.users.sort((a : User , b : User)=> {
      if(a.firstName>b.firstName)
      return 1;
      else if(a.firstName<b.firstName)
      return -1;
    });
  };
}
