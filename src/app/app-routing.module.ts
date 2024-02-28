import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/view/home/home.component';
import { JudiciarioComponent } from 'src/view/judiciario/judiciario.component';
import { OrdemAraoComponent } from 'src/view/judiciario/ordem-arao/ordem-arao.component';
import { OrdemMoisesComponent } from 'src/view/judiciario/ordem-moises/ordem-moises.component';
import { LegislacaoComponent } from 'src/view/legislacao/legislacao.component';
import { SenadoComponent } from 'src/view/senado/senado.component';
import { TronoRealComponent } from 'src/view/trono-real/trono-real.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'legislacao',component:LegislacaoComponent},
  {path:'trono-real',component:TronoRealComponent},
  {path:'senado-federal',component:SenadoComponent},
  {path:'justica-federal',component:JudiciarioComponent, children:[
    {path:'', component:OrdemMoisesComponent},
    {path:'justica-federal/ordem-moises', component:OrdemMoisesComponent},
    {path:'justica-federal/ordem-arao', component:OrdemAraoComponent},
  ]},
  {path:'justica-estadual',component:SenadoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
