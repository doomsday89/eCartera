import {AngularFirestore} from '@angular/fire/firestore';
import { EventEmitter, Injectable } from '@angular/core';

import { Cuenta, Tipo } from '../IModels';
@Injectable({
  providedIn: 'root'
})
export class TransactService {

  constructor(private _firestore:AngularFirestore) { }
  aCuentas:Cuenta[]=[
    {id:1,nombre:'Nomina',tipo:1,numero:'3434 4444 3333 3898',expira:'10/25',corte:'08',limite:35000, moneda:'MNX',nota:'Nueva',icon:'../../../assets/card.svg',activo:true},
    {id:1,nombre:'Clasica',tipo:2,numero:'1234 5454 2321 5816',expira:'10/23',corte:'12',limite:50000, moneda:'MNX',nota:'Nueva',icon:'../../../assets/credit-card.svg',activo:true},
    {id:1,nombre:'LikeU',tipo:2,numero:'1234 5454 2321 5816',expira:'10/23',corte:'12',limite:80000, moneda:'MNX',nota:'Nueva',icon:'../../../assets/red-card.svg',activo:true}
  ];
  aTransacs=[
    { id:1, cuenta:'likeU',tipo:1, categoria:'Telefono',para:'Terron', fecha:new Date('2021-10-31'),monto:1620,nota:'ZTE',confirmada:true},
    { id:2, cuenta:'likeU',tipo:1, categoria:'Telefono',para:'Nice', fecha:new Date('2021-10-31'),monto:400,nota:'Telcel',confirmada:true}
  ];

  aIngresos:Tipo[]=[
    new Tipo("1","Salario",17500),
    new Tipo("2","Salario2",500)
  ];
  aEgresos:Tipo[]=[
    new Tipo("1","Renta",1750),
    new Tipo("2","Lavadora",250)
  ];
  Ingreso$=new EventEmitter<Tipo[]>();
  Egreso$=new EventEmitter<Tipo[]>();
  //Methods
  getCuentas(){
    return this.aCuentas;
  }
  getAllIngresos(){
    return this.aIngresos;
  }
  getAllEgresos(){
    return this.aEgresos;
  }
  AgregarIngreso(o:Tipo){
    this.aIngresos.push(o);
    this.Ingreso$.emit(this.aIngresos);
  }
  QuitarIngreso(o:Tipo){
    this.aIngresos.splice(this.aIngresos.indexOf(o),1);
    this.Ingreso$.emit(this.aIngresos);
  }
  AgregarEgreso(o:Tipo){
    this.aEgresos.push(o);
    this.Egreso$.emit(this.aEgresos);
  }
  QuitarEgreso(o:Tipo){
    this.aEgresos.splice(this.aEgresos.indexOf(o),1);
    this.Egreso$.emit(this.aEgresos);
  }
  //Ingresos
  getIngresos(){
    return this._firestore.collection('Ingresos',ref=>ref.orderBy('Fecha')).snapshotChanges();
  }
  addIngreso(oIngreso):Promise<any>{
    this.Ingreso$.emit(this.aIngresos);
    return this._firestore.collection('Ingresos').add(oIngreso);
  }
  deleteIngreso(id):Promise<any>{
    return this._firestore.collection('Ingresos').doc(id).delete();
  }
  //Egresos
  getEgresos()
  {
    return this._firestore.collection('Egresos',ref=>ref.orderBy('Fecha')).snapshotChanges();
  }
  addEgreso(oEgreso){
    this.Egreso$.emit(this.aEgresos);
    return this._firestore.collection('Egresos').add(oEgreso);
  }
  deleteEgreso(id):Promise<any>{
    return this._firestore.collection('Egresos').doc(id).delete();
  }

  getTransacs(id:number){
    return this.aTransacs;
  }
}
