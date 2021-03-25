import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FormComponent } from './pages/form/form.component';
import { MostrarComponent } from './pages/mostrar/mostrar.component';
import { NoExisteComponent } from './pages/no-existe/no-existe.component';

const routes: Routes = [{path:"form",component:FormComponent},{path:"mostrar",component:MostrarComponent},{path:"",component:FormComponent},{path:"**",component:NoExisteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
