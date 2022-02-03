import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  acno = ""
  pswd = ""
  amount = ""

  acno1 = ""
  paswd = ""
  amountt = ""

  depositForm = this.fb.group({
    acno: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    pswd: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
    amount: ['', [Validators.required, Validators.pattern('[0-9]*')]]
  })


  withdrawForm = this.fb.group({
    acno: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    pswd: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
    amount: ['', [Validators.required, Validators.pattern('[0-9]*')]]
  }

  )
user:any
accno=""

lDate:any
  constructor(private ds: DataService, private fb: FormBuilder, private router: Router) {
    this.lDate= new Date()
    if(localStorage.getItem("currentUserName")){
    this.user=JSON.parse(localStorage.getItem("currentUserName") || "")
   }
  }

  ngOnInit(): void {
    if(!localStorage.getItem("token")){
      alert(("Please Log In"))
      this.router.navigateByUrl("")
    }
  }
  
  logout(){
    localStorage.removeItem("currentAcno")
    localStorage.removeItem("currentUserName")
    localStorage.removeItem("token")
    this.router.navigateByUrl("")
  }

  deposit() {

    var acno = this.depositForm.value.acno
    var pswd = this.depositForm.value.pswd
    var amount = this.depositForm.value.amount

    if (this.depositForm.valid) {
      this.ds.deposit(acno, pswd, amount)
      .subscribe((result:any) =>{
        if(result){
        alert(result.message)
        
      }
      
      },
      (result)=>{
        alert(result.error.message)
      
      }
      )

    } else {
      alert("invalid form")
    }
 }

  withdraw() {
    var acno = this.withdrawForm.value.acno
    var pswd = this.withdrawForm.value.pswd
    var amount = this.withdrawForm.value.amount

    if (this.withdrawForm.valid) {

      this.ds.withdraw(acno, pswd, amount)
        .subscribe((result:any) =>{
          if(result){
          alert(result.message)
          
        }
        
        },
        (result)=>{
          alert(result.error.message)
        
        }
        )
  
      } else {
        alert("invalid form")
      }
   }
   deleteFromParent(){
this.accno=JSON.parse(localStorage.getItem("currentAcno") || "")

   }
   delete(event:any){
     this.ds.delete(event)
     .subscribe((result:any)=>{
       if(result){
        alert(result.message)
        this.router.navigateByUrl('')
       }
     },
     (result)=>{
       alert(result.error.message)
     }
     )
     }

     cancel(){
       this.accno=""
     }
   }




