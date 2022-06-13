import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import {RouterModule, Routes} from "@angular/router";


const rutas: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: 'contacto', component: ContactComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rutas),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
