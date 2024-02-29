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

@NgModule({
  declarations: [
    AppComponent,
    SenadoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavBarModule,
    LegislacaoModule,
    JudiciarioModule,
    OrdemMoisesModule,
    FooterModule,
    CardMinisterioModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
