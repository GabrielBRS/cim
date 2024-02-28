import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdemMoisesComponent } from './ordem-moises.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [OrdemMoisesComponent],
  exports:[OrdemMoisesComponent]
})
export class OrdemMoisesModule { }
