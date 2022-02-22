export class Tipo {
    Id:string;
    Descripcion:string;
    Fecha:Date;
    Valor:number;
    constructor(id:string,desc:string,Val:number){
        this.Id = id;
        this.Fecha = new Date();
        this.Descripcion=desc;
        this.Valor=Val;
    }
}

export interface Cuenta{
    id:number;
    nombre:string;
    tipo:number;
    numero:string;
    expira:Date;
    corte:number;
    limite:number;
    moneda:string;
    nota:string;
    icon:string;
    activo:boolean;    
}

export interface Transac{
    id:number;
    cuenta:string;
    tipo:number;
    categoria:string;
    para:string;
    fecha:Date;
    monto:number;
    confirmada:boolean;
    nota;
}