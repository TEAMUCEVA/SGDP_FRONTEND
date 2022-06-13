
export class Proyecto {
  id: number;
  nombre: string;
  creadoEn: string;
  FechaActu: string;
  tipo: string;
  programa: string;
  autores: string;
  repositorio: string;


  constructor() {
    this.id=0;
    this.nombre="";
    this.FechaActu="";
    this.tipo="";
    this.programa="";
    this.autores="";
    this.creadoEn="";
    this.repositorio="";
  }
}
