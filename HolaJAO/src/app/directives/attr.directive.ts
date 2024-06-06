import { Directive, ElementRef, Input, HostListener  } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class AttrDirective {

  @Input() defaultColor = '';
  @Input('appHighlight') highLightColor = '';

  @HostListener('mouseenter') onMouseEnter() {
    // Cambiar el color al color definido, al por defecto o a rojo
    this._cambiarColor(this.highLightColor || this.defaultColor || 'tomato');
  }

  @HostListener('mouseleave') onMouseLeave() {
    // Cambiar el color a null para quitárselo
    this._cambiarColor(null);
  }


  constructor(private _elementRef: ElementRef) { }


  private _cambiarColor(color: string | null) {
    this._elementRef.nativeElement.style.backgroundColor = color;
  }



}
