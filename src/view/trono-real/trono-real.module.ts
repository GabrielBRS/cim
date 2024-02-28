import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TronoRealComponent } from './trono-real.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TronoRealComponent],
  exports:[TronoRealComponent]
})
export class TronoRealModule { }
