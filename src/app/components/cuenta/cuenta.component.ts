import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

import { Cuenta } from 'src/app/IModels';
import { TransactService } from 'src/app/services/transact.service';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.component.html',
  styleUrls: ['./cuenta.component.css']
})
export class CuentaComponent implements OnInit {

  constructor(private _service:TransactService, private _arouter: ActivatedRoute) {     
    this.Id = this._arouter.snapshot.paramMap.get('id');
    this._service.getCuenta(this.Id).subscribe(data=>{
      this.oCuenta=data.payload.data();
      var fecha:any= this.oCuenta.expira;
      this.oCuenta.expira= new Date(fecha.seconds*1000);
      this.FechaExp={"year":this.oCuenta.expira.getFullYear(),"month":this.oCuenta.expira.getMonth()+1,"day":30};
    });
  }

  ngOnInit(): void {
  }
  Id:string;
  FechaExp:NgbDateStruct;
  aTipos=[
    {id:"1",nombre:'Efectivo'},
    {id:"2",nombre:'Tarjeta'},
    {id:"3",nombre:'Tarjeta de credito'}
  ];
  oCuenta:Cuenta;
  titulo='Cta NUEVA';
  //Metodos
  NuevaCuenta(){

  }
  Edit(){
    if(this.Id!=null)
      this._service.updateCuenta(this.Id,this.oCuenta)
  }
}
