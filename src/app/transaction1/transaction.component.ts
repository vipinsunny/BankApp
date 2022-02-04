import { Component, OnInit } from '@angular/core';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { DataService } from '../services1/data.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  transactions:any
  acno:""
  constructor(private ds:DataService) {
    this.acno=JSON.parse(localStorage.getItem("currentAcno") || "")
    
    this.ds.getTransaction(this.acno)
    .subscribe((result:any)=>{
      console.log(result);
      if(result){
      this.transactions=result.transaction
      }
    },
    (result)=>{
      alert(result.error.message)
    }
    
    )
    
   }

  ngOnInit(): void {
  }

}

