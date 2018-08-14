import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { User } from './user';
import { LoginUser } from 'src/app/login-user';


const httpOptions = {
  headers : new HttpHeaders({'Content-Type' : 'application/json'})
}
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private privateUrl = 'http://localhost:8080/SpringAngular/api';
  constructor(private httpClient : HttpClient) { }

  public getUsers(){
    return this.httpClient.get<User[]>(this.privateUrl+'/all/');

  }

  public deleteUser(user){
    return this.httpClient.post<User>(this.privateUrl+'/delete',user);
  }

  public createUser(user){
   return this.httpClient.post<User>(this.privateUrl+'/add',user);
  }

  public validateUser(user){
    return this.httpClient.post<LoginUser>(this.privateUrl+'/login',user);
  };
  
}
