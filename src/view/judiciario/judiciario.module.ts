import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JudiciarioComponent } from './judiciario.component';
import { RouterModule } from '@angular/router';
import { OrdemMoisesModule } from './ordem-moises/ordem-moises.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    OrdemMoisesModule,
  ],
  declarations: [JudiciarioComponent],
  exports:[JudiciarioComponent]
})
export class JudiciarioModule { }
