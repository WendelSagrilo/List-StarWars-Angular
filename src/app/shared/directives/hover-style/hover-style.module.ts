import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HoverStyleDirective } from './hover-style.directive';

@NgModule({
  declarations: [HoverStyleDirective],
  exports: [HoverStyleDirective]
})
export class HoverStyleModule { }
