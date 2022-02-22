import {AngularFirestore} from '@angular/fire/firestore';
import { EventEmitter, Injectable } from '@angular/core';

import { Cuenta, Tipo } from '../IModels';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TransactService {

  constructor(private _firestore:AngularFirestore) { }
  aCuentas:Cuenta[]=[];
  aTransacs=[
    { id:1, cuenta:'likeU',tipo:1, categoria:'Telefono',para:'Terron', fecha:new Date('2021-10-31'),monto:1620,nota:'ZTE',confirmada:true},
    { id:2, cuenta:'likeU',tipo:1, categoria:'Telefono',para:'Nice', fecha:new Date('2021-10-31'),monto:400,nota:'Telcel',confirmada:true}
  ];


  Ingreso$=new EventEmitter<Tipo[]>();
  Egreso$=new EventEmitter<Tipo[]>();
  //Methods
  /*
  AgregarIngreso(o:Tipo){
    this.aIngresos.push(o);
    this.Ingreso$.emit(this.aIngresos);
  }
  QuitarIngreso(o:Tipo){
    this.aIngresos.splice(this.aIngresos.indexOf(o),1);
    this.Ingreso$.emit(this.aIngresos);
  }*/
  //firestore
  /////////////
  getCuentas(){
    return this._firestore.collection('Cuentas').snapshotChanges();
  }
  getCuenta(id:string):Observable<any>
  {
    return this._firestore.collection('Cuentas').doc(id).snapshotChanges();
  }
  addCuenta(oCuenta):Promise<any>
  {
    return this._firestore.collection('Cuentas').add(oCuenta);
  }
  updateCuenta(id:string, data:any):Promise<any>
  {
    return this._firestore.collection('Cuentas').doc(id).update(data);
  }


  addIngreso(oIngreso):Promise<any>{
    //this.Ingreso$.emit(this.aIngresos);
    return this._firestore.collection('Ingresos').add(oIngreso);
  }
  deleteIngreso(id):Promise<any>{
    return this._firestore.collection('Ingresos').doc(id).delete();
  }
  

  getTransacs(id:number){
    return this.aTransacs;
  }
}
