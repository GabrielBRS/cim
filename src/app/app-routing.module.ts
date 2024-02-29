import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/view/home/home.component';
import { JudiciarioComponent } from 'src/view/judiciario/judiciario.component';
import { OrdemAraoComponent } from 'src/view/judiciario/ordem-arao/ordem-arao.component';
import { DoutrinaRabinicaComponent } from 'src/view/judiciario/ordem-moises/doutrina-rabinica/doutrina-rabinica.component';
import { OrdemMoisesComponent } from 'src/view/judiciario/ordem-moises/ordem-moises.component';
import { SumulasVinculantesComponent } from 'src/view/judiciario/ordem-moises/sumulas-vinculantes/sumulas-vinculantes.component';
import { LegislacaoComponent } from 'src/view/legislacao/legislacao.component';
import { SenadoComponent } from 'src/view/senado/senado.component';
import { SobreComponent } from 'src/view/sobre/sobre.component';
import { TronoRealComponent } from 'src/view/trono-real/trono-real.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'reino-jerusalem',component:LegislacaoComponent},
  {path:'sobre',component:SobreComponent},
  {path:'trono-real',component:TronoRealComponent},
  {path:'senado-federal',component:SenadoComponent},
  {path:'justica-federal',component:JudiciarioComponent, children:[
    {path:'', component:OrdemAraoComponent},
    {path:'ordem-arao', component:OrdemAraoComponent},
    {path:'ordem-moises', component:OrdemMoisesComponent, children:[
      {path:'', component:SumulasVinculantesComponent},
      {path:'doutrina-rabinica', component:DoutrinaRabinicaComponent},
      {path:'sumula-vinculante', component:SumulasVinculantesComponent},
    ]},

  ]},
  {path:'justica-estadual',component:SenadoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
