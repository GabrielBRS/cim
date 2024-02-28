import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LegislacaoComponent } from './legislacao.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [LegislacaoComponent],
  exports:[LegislacaoComponent]
})
export class LegislacaoModule { }
