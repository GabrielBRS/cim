import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdemAraoComponent } from './ordem-arao.component';
import { CardMinisterioModule } from 'src/components/card-ministerio/card-ministerio.module';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    CardMinisterioModule,
    RouterModule,
  ],
  declarations: [OrdemAraoComponent],
  exports:[OrdemAraoComponent]
})
export class OrdemAraoModule { }
