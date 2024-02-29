import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LegislacaoComponent } from './legislacao.component';
import { RouterModule } from '@angular/router';
import { CardMinisterioModule } from 'src/components/card-ministerio/card-ministerio.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CardMinisterioModule,
  ],
  declarations: [LegislacaoComponent],
  exports:[LegislacaoComponent]
})
export class LegislacaoModule { }
