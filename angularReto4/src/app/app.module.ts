import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './pages/form/form.component';
import { MostrarComponent } from './pages/mostrar/mostrar.component';
import { NoExisteComponent } from './pages/no-existe/no-existe.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    MostrarComponent,
    NoExisteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
