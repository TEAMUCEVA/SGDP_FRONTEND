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
import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import {RouterModule, Routes} from "@angular/router";

const rutas: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: 'contacto', component: ContactComponent}
  {path: 'listarproyecto', component: ListarproyectoComponent},
  {path: 'crearproyecto', component: CrearproyectoComponent},
  {path: 'crearproyecto/:id', component: CrearproyectoComponent},
  { path: 'proyectos/page/:page', component: ListarproyectoComponent },

];

@NgModule({
  declarations: [
    AppComponent,
  imports: [
    HeaderComponent,
    ContactComponent,
    FooterComponent,
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
