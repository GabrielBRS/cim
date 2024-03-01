import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SenadoComponent } from './senado.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [SenadoComponent],
  exports:[SenadoComponent]
})
export class SenadoModule { }
