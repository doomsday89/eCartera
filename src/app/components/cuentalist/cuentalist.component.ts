import { Component, OnInit } from '@angular/core';
import { Cuenta } from 'src/app/IModels';
import { TransactService } from 'src/app/services/transact.service';

@Component({
  selector: 'app-cuentalist',
  templateUrl: './cuentalist.component.html',
  styleUrls: ['./cuentalist.component.css']
})
export class CuentalistComponent implements OnInit {

  constructor(private _service:TransactService) { 
    this.aCuentas=this._service.getCuentas();
  }

  ngOnInit(): void {
  }
  aCuentas:Cuenta[]=[];
}
