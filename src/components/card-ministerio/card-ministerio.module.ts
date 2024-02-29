import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardMinisterioComponent } from './card-ministerio.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [CardMinisterioComponent],
  exports:[CardMinisterioComponent]
})
export class CardMinisterioModule { }
