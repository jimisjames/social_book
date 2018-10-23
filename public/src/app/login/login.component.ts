import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private _httpService: HttpService,
    private _router: Router
  ) { }

  newUser = {
    name: "",
    email: "",
    password: ""
  }

  user = {
    email: "",
    password: ""
  }

  confirm_password = ""

  regFlash = []
  logFlash = []

  ngOnInit() {
  }

  login(){
    if(this.user.email.length > 7 || this.user.password.length > 2){
      let observable = this._httpService.login(this.user)
      observable.subscribe(data => {
        console.log(data)
        if(data["message"] == "Success"){
          this._router.navigate(['/']);
        }
      })
    } else {
      this.logFlash = []
      this.logFlash.push("Please enter your valid email and password, or register below.")
    }
  }

  register(){
    if(this.newUser.password == this.confirm_password && this.newUser.password.length > 2){
      let observable = this._httpService.register(this.newUser)
      observable.subscribe(data => {
        console.log(data)
        if(data["message"] == "Success"){
          this.regFlash = []
          this.logFlash = []
          this.regFlash.push("You are now registered! Please log in")
        } else {
          this.regFlash = []
          for(let err in data["error"]["errors"]){
            this.regFlash.push(data["error"]["errors"][err]["message"])
          }

        }
      })
    } else {
      this.regFlash = []
      this.regFlash.push("Please enter and confirm your password, password must be more than 3 char and must match.")
    }
  }
}
