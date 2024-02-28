import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdemAraoComponent } from './ordem-arao.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [OrdemAraoComponent],
  exports:[OrdemAraoComponent]
})
export class OrdemAraoModule { }
