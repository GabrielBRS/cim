import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdemMoisesComponent } from './ordem-moises.component';
import { RouterModule } from '@angular/router';
import { SumulasVinculantesModule } from './sumulas-vinculantes/sumulas-vinculantes.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SumulasVinculantesModule,
  ],
  declarations: [OrdemMoisesComponent],
  exports:[OrdemMoisesComponent]
})
export class OrdemMoisesModule { }
