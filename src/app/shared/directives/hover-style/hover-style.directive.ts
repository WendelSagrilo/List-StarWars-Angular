import { Directive, ElementRef, Renderer, HostListener } from '@angular/core';
import { ScrollStrategyOptions } from '@angular/cdk/overlay';

@Directive({
    selector: '[appHoverStyle]'
})
export class HoverStyleDirective {

    constructor(private element: ElementRef,
        private render: Renderer) { }


    @HostListener('mouseover')
    scaleOn() {
        this.render.setElementStyle(this.element.nativeElement, 'filter', 'brightness(100%)');
 
    }

    @HostListener('mouseleave')
    scaleOff() {
        this.render.setElementStyle(this.element.nativeElement, 'filter', 'brightness(70%)');
 
    }
}
