import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/view/home/home.component';
import { JudiciarioComponent } from 'src/view/judiciario/judiciario.component';
import { OrdemAraoComponent } from 'src/view/judiciario/ordem-arao/ordem-arao.component';
import { OrdemAraoModule } from 'src/view/judiciario/ordem-arao/ordem-arao.module';
import { DoutrinaRabinicaComponent } from 'src/view/judiciario/ordem-moises/doutrina-rabinica/doutrina-rabinica.component';
import { OrdemMoisesComponent } from 'src/view/judiciario/ordem-moises/ordem-moises.component';
import { SumulasVinculantesComponent } from 'src/view/judiciario/ordem-moises/sumulas-vinculantes/sumulas-vinculantes.component';
import { LegislacaoComponent } from 'src/view/legislacao/legislacao.component';
import { SenadoComponent } from 'src/view/senado/senado.component';
import { TratadosComponent } from 'src/view/senado/tratados/tratados.component';
import { SobreComponent } from 'src/view/sobre/sobre.component';
import { TronoRealComponent } from 'src/view/trono-real/trono-real.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'reino-jerusalem',component:LegislacaoComponent},
  {path:'sobre',component:SobreComponent},
  {path:'trono-real',component:TronoRealComponent},
  {path:'senado-federal',component:SenadoComponent, children:[
    // {path:'', component:TratadosComponent},
    // {path:'tratados', component:TratadosComponent},
  ]},
  {path:'senado-federal/tratados', component:TratadosComponent},
  {path:'justica-federal', component:JudiciarioComponent},
  {path:'justica-federal/ordem-moises', component:OrdemMoisesComponent, children:[
    {path:'', component:SumulasVinculantesComponent},
    {path:'sumula-vinculante', component:SumulasVinculantesComponent},
    {path:'doutrina-rabinica',component:DoutrinaRabinicaComponent},
  ]},
  {path:'justica-federal/ordem-arao', component:OrdemAraoComponent},


  // children:[
  //   // {path:'', component:JudiciarioComponent},
  //   // {path:'ordem-arao', component:OrdemAraoComponent},
  //   {path:'ordem-moises', component:OrdemMoisesComponent, children:[
  //     {path:'', component:SumulasVinculantesComponent},
  //     {path:'doutrina-rabinica', component:DoutrinaRabinicaComponent},
  //     {path:'sumula-vinculante', component:SumulasVinculantesComponent},
  //   ]
  // },
  //   {path:'justica-federal/ordem-arao', component:OrdemAraoComponent},

  // ]
// },
  {path:'justica-estadual',component:SenadoComponent},
  {path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration: 'enabled'}),
  OrdemAraoModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
