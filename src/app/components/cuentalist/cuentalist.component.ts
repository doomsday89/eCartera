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
    this._service.getCuentas().subscribe(data=>{      
      data.forEach((element:any)=>{
        var oCuenta= element.payload.doc.data();        
        this.aCuentas.push( {id:element.payload.doc.id, ... oCuenta});
      });      
    })
  }

  ngOnInit(): void {
  }
  aCuentas:Cuenta[]=[];
}
