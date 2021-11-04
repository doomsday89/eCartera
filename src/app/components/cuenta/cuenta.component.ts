import { Component, OnInit } from '@angular/core';
import { TransactService } from 'src/app/services/transact.service';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.component.html',
  styleUrls: ['./cuenta.component.css']
})
export class CuentaComponent implements OnInit {

  constructor(private _service:TransactService) { 
    this.oCuenta=this._service.getTransacs(2);
  }

  ngOnInit(): void {
  }
  aTipos=[
    {id:"1",nombre:'Cash'},
    {id:"2",nombre:'Card'},
    {id:"3",nombre:'Credit-card'}
  ];
  oCuenta={};
  cuenta='likeU';
}
