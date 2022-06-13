import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListarproyectoComponent } from './listarproyecto/listarproyecto.component';
import { CrearproyectoComponent } from './crearproyecto/crearproyecto.component';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule, Routes} from "@angular/router";
import { FormsModule } from '@angular/forms';
import {ProyectoService} from "./listarproyecto/proyecto.service";
import {PaginatorComponent} from "./paginator/paginator.component";

const rutas: Routes = [
  {path: '', redirectTo: '/listarproyecto', pathMatch: 'full'},
  {path: 'listarproyecto', component: ListarproyectoComponent},
  {path: 'crearproyecto', component: CrearproyectoComponent},
  {path: 'crearproyecto/:id', component: CrearproyectoComponent},
  { path: 'proyectos/page/:page', component: ListarproyectoComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    ListarproyectoComponent,
    CrearproyectoComponent,
    PaginatorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(rutas),

  ],
  providers: [ProyectoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
