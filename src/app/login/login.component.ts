import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  aim = "Your Perfect Banking Partner"
  accno = "Account Number Please"
  acno = ""
  pswd = ""

  users:any = {
    1000: { acno: 1000, uname: "Vipin", password: "1000", balance: 5000 },
    1001: { acno: 1001, uname: "Kevin", password: "1001", balance: 4000 },
    1002: { acno: 1002, uname: "Mini", password: "1002", balance: 3000 }
  }



  constructor(private router:Router) { }



  ngOnInit(): void {
  }

  acnoChange(event:any){

    this.acno = event.target.value
    console.log(this.acno);
  }

  pswdChange(event: any) {
    this.pswd = event.target.value;
    console.log(this.pswd);
  }





  // login(a:any, p:any){

    login(){
      var acno=this.acno;
      var password=this.pswd
    
    // console.log(a);
    // var acno = a.value;
    // var password = p.value;
    let database = this.users;
    if (acno in database) {
      if (password == database[acno]["password"]) {
        alert("Login successful")
        this.router.navigateByUrl("dashboard")
      }
      else {
        alert("Incorrect Password")
      }
    }
    else {
      alert("Invalid Account Number")
    }
  }
}
