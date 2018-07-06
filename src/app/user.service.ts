import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class UserService {
  user : Observable<any>
  users : Observable<any[]>
  constructor(private http:HttpClient) { }
  getUsers(callback){
    this.users = this.http.get<any[]>('http://localhost:2018/getusers')
    this.users.subscribe(
      data=>{
        console.log("Data",data)
        callback(data)
      },
      err=>{
        console.log("Error",err)
        callback(err)
      }
    )
  }
  getUser(obj,callback){
    this.user = this.http.post<any>('http://localhost:2018/getuser',obj)
    this.user.subscribe(
      data => {
        console.log("Data",data)
        callback(data)
      },
      err => {
        console.log("Error",err)
        callback(err)
      } 
    )
  }
}
