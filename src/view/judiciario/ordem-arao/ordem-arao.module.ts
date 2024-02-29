import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdemAraoComponent } from './ordem-arao.component';
import { CardMinisterioModule } from 'src/components/card-ministerio/card-ministerio.module';

@NgModule({
  imports: [
    CommonModule,
    CardMinisterioModule,
  ],
  declarations: [OrdemAraoComponent],
  exports:[OrdemAraoComponent]
})
export class OrdemAraoModule { }
