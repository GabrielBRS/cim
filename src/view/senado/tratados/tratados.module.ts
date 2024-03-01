import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TratadosComponent } from './tratados.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TratadosComponent],
  exports:[TratadosComponent]
})
export class TratadosModule { }
