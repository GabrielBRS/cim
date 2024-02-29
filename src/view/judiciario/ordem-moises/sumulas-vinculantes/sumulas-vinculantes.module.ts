import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SumulasVinculantesComponent } from './sumulas-vinculantes.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [SumulasVinculantesComponent],
  exports:[
    SumulasVinculantesComponent
  ]
})
export class SumulasVinculantesModule { }
