import { Component, OnInit } from '@angular/core';
import {ProyectoService} from "../listarproyecto/proyecto.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Proyecto} from "../listarproyecto/proyecto";
import swal from "sweetalert2";

@Component({
  selector: 'app-crearproyecto',
  templateUrl: './crearproyecto.component.html',
  styleUrls: ['./crearproyecto.component.css']
})
export class CrearproyectoComponent implements OnInit {
  public proyecto= new Proyecto();

  public titulo: string = "Crear usuario"
  constructor(private proyectoService: ProyectoService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    console.log("iniciando form")
    this.cargarProyecto()
  }
  cargarProyecto(): void{
    console.log("vamos a cargar al usuario")
    this.activatedRoute.params.subscribe(params => {
      let id = params['id']
      if(id){
       this.proyectoService.getProyecto(id).subscribe( (proyecto) => this.proyecto = proyecto)
      }
    })
  }

  create(): void {
    this.proyectoService.crearProyecto(this.proyecto)
      .subscribe(proyecto => {
          this.router.navigate(['/listarproyecto'])
          swal.fire({
            title: 'Nuevo Proyecto',
            text: `Proyecto ${proyecto.nombre} creado con éxito!`,
            icon: 'success',
            confirmButtonText: 'Aceptar'
          })
        }
      );
    console.log(this.proyecto);
  }

  update():void{
    this.proyectoService.modificarProyecto(this.proyecto)
      .subscribe( proyecto => {
          this.router.navigate(['/listarproyecto'])
          swal.fire({
            title: 'Proyecto Actualizado',
            text: `Proyecto ${proyecto.nombre} actualizado con éxito!`,
            icon: 'success',
            confirmButtonText: 'Aceptar'
          })
        }

      )
  }

}
