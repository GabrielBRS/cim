import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LegislacaoComponent } from 'src/view/legislacao/legislacao.component';
import { SenadoComponent } from 'src/view/senado/senado.component';
import { NavBarModule } from 'src/components/nav-bar/nav-bar.module';
import { JudiciarioComponent } from 'src/view/judiciario/judiciario.component';
import { LegislacaoModule } from 'src/view/legislacao/legislacao.module';
import { JudiciarioModule } from 'src/view/judiciario/judiciario.module';
import { OrdemMoisesModule } from 'src/view/judiciario/ordem-moises/ordem-moises.module';
import { FooterModule } from 'src/components/footer/footer.module';
import { CardMinisterioModule } from 'src/components/card-ministerio/card-ministerio.module';
import { OrdemAraoModule } from 'src/view/judiciario/ordem-arao/ordem-arao.module';
import { FooterComponent } from 'src/components/footer/footer.component';
import { TronoRealModule } from 'src/view/trono-real/trono-real.module';
import { SenadoModule } from 'src/view/senado/Senado.module';
import { SobreModule } from 'src/view/sobre/sobre.module';
import { HomeModule } from 'src/view/home/home.module';
import { TratadosModule } from 'src/view/senado/tratados/tratados.module';
import { DoutrinaRabinicaModule } from 'src/view/judiciario/ordem-moises/doutrina-rabinica/doutrina-rabinica.module';
import { SumulasVinculantesModule } from 'src/view/judiciario/ordem-moises/sumulas-vinculantes/sumulas-vinculantes.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavBarModule,
    FooterModule,
    LegislacaoModule,
    TronoRealModule,
    SenadoModule,
    JudiciarioModule,
    SobreModule,
    HomeModule,
    OrdemMoisesModule,
    OrdemAraoModule,
    TratadosModule,
    DoutrinaRabinicaModule,
    SumulasVinculantesModule,

    CardMinisterioModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
