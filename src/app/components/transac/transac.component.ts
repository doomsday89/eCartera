import { Component, OnInit } from '@angular/core';
import { TransactService } from 'src/app/services/transact.service';

@Component({
  selector: 'app-transac',
  templateUrl: './transac.component.html',
  styleUrls: ['./transac.component.css']
})
export class TransacComponent implements OnInit {

  constructor(private _service:TransactService) { 
    this.aTransactions=this._service.getTransacs(2);
  }

  ngOnInit(): void {
  }
  aTransactions=[];
  cuenta:string="LikeU";

}
