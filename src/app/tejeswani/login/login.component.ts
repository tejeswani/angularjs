import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 // city:string="Hyderabad";

 //path:string = "src/assets/Images/netflix-login-page.jpg";
  
 userName:any;
  password:any;
  emailId:any;
  checkboxvalue:any;
  constructor() { }

  ngOnInit(): void {
  }
  submit(){
    let obj={
      "userName":this.userName,
      "password":this.password,
      "emailId":this.emailId,
      "checkBox":this.checkboxvalue
    }
    console.log(obj)
  }

  checkBox(event:any){
    this.checkboxvalue = event.target.checked;
    console.log(this.checkboxvalue)
  }
  }
