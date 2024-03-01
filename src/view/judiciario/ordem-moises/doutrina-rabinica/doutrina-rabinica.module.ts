import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoutrinaRabinicaComponent } from './doutrina-rabinica.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [DoutrinaRabinicaComponent],
  exports:[DoutrinaRabinicaComponent]
})
export class DoutrinaRabinicaModule { }
