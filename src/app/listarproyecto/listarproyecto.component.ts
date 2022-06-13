import { Component, OnInit } from '@angular/core';
import {Proyecto} from "./proyecto";
import {ProyectoService} from "./proyecto.service";
import swal from 'sweetalert2';
import {ActivatedRoute} from '@angular/router';
import { tap } from 'rxjs/operators';
@Component({
  selector: 'app-listarproyecto',
  templateUrl: './listarproyecto.component.html',
  styleUrls: ['./listarproyecto.component.css']
})
export class ListarproyectoComponent implements OnInit {
  proyectos: Proyecto[]=[];
  paginador: any;
  constructor(private proyectoService: ProyectoService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {

      // @ts-ignore
      let page: number = +params.get('page');

      if (!page) {
        page = 0;
      }

      this.proyectoService.getProyectos(page)
        .pipe(
          tap(response => {
            console.log('ClientesComponent: tap 3');
            (response.content as Proyecto[]).forEach(proyecto => console.log(proyecto.nombre));
          })
        ).subscribe(response => {
        this.proyectos = response.content as Proyecto[];
        this.paginador = response;
      });
    });
  }

  borrarProyecto(proyecto: Proyecto): void {
    swal.fire({
      title: 'Esta seguro?',
      text: `¿Seguro que desea eliminar al cliente ${proyecto.nombre}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        this.proyectoService.borrarProyecto(proyecto.id).subscribe(
          () => {
            this.proyectos = this.proyectos.filter(cli => cli !== proyecto)
            swal.fire(
              'Eliminado!',
              `Se ha eliminado el proyecto ${proyecto.nombre} `,
              'success'
            )
          }
        )
      }
    })
  }

}
