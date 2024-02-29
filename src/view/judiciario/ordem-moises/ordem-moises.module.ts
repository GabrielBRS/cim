import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdemMoisesComponent } from './ordem-moises.component';
import { RouterModule } from '@angular/router';
import { SumulasVinculantesModule } from './sumulas-vinculantes/sumulas-vinculantes.module';
import { CardMinisterioModule } from 'src/components/card-ministerio/card-ministerio.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SumulasVinculantesModule,
    CardMinisterioModule
  ],
  declarations: [OrdemMoisesComponent],
  exports:[OrdemMoisesComponent]
})
export class OrdemMoisesModule { }
