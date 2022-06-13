import { Injectable } from '@angular/core';
import {catchError, map, Observable, of, tap, throwError} from "rxjs";
import {Proyecto} from "./proyecto";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import swal from "sweetalert2";

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  private urlEndPoint: string = 'http://localhost:8080/proyecto_service/proyectos';
  private httpHeaders = new HttpHeaders({'Content-Type':'application/json'});
  constructor(private httpClient: HttpClient, private router: Router) {}

  getProyectos(page: number): Observable<any> {
    return this.httpClient.get(this.urlEndPoint + '/page/' + page).pipe(
      tap((response: any) => {
        (response.content as Proyecto[]).forEach(proyecto => console.log(proyecto.nombre));
      }),
      map((response: any) => {
        (response.content as Proyecto[]).map(cliente => {
          cliente.nombre = cliente.nombre.toUpperCase();
          //let datePipe = new DatePipe('es');
          //cliente.createAt = datePipe.transform(cliente.createAt, 'EEEE dd, MMMM yyyy');
          //cliente.createAt = formatDate(cliente.createAt, 'dd-MM-yyyy', 'es');
          return cliente;
        });
        return response;
      }),
      tap(response => {
        (response.content as Proyecto[]).forEach(proyecto => console.log(proyecto.nombre));
      })
    );
  }

  getProyecto(id: any): Observable<Proyecto>{
    return this.httpClient.get<Proyecto>(`${this.urlEndPoint}/${id}`).pipe(
      catchError(e => {
        this.router.navigate(['/proyectos']);
        //console.error(e.error.mensaje);
        //swal('Error al editar', e.error.mensaje, 'error');
        return throwError(e);
      })
    );
  }

  crearProyecto(proyecto: Proyecto): Observable<Proyecto>{
    console.log("debug");
    return this.httpClient.post<Proyecto>(this.urlEndPoint, proyecto,{headers: this.httpHeaders}).pipe(
      map(response => response as Proyecto)
    );
  }

  modificarProyecto(proyecto: Proyecto): Observable<any>{
    return this.httpClient.put<any>(`${this.urlEndPoint}/${proyecto.id}`, proyecto,{headers: this.httpHeaders}).pipe(
      catchError(e => {
          if(e.status == 400){
            throwError(e);
          }
          console.log(e.error.message());
          return throwError(e);
        }
      )
    );
  }

  borrarProyecto(id: number): Observable<Proyecto>{
    return this.httpClient.delete<Proyecto>(`${this.urlEndPoint}/${id}`, { headers: this.httpHeaders }).pipe(
      catchError(e => {
        console.error(e.error.mensaje);
        swal.fire(e.error.mensaje, e.error.error, 'error');
        return throwError(e);
      })
    );

}
}
