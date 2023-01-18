import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonasComponent } from './personas/personas.component';
import { FormsModule } from '@angular/forms';
import { PersonaDetailComponent } from './persona-detail/persona-detail.component';
import { FormularioComponent } from './formulario/formulario.component';
import { NavegacionComponent } from './navegacion/navegacion.component'; // <-- NgModel lives here

@NgModule({
  declarations: [
    AppComponent,
    PersonasComponent,
    PersonaDetailComponent,
    FormularioComponent,
    NavegacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
