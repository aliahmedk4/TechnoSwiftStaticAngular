import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[CapitalizeFirstChar]'
})
export class CapitalizeFirstLetterDirective {
  @Input() capitalizeType: 'first' | 'all' = 'first';

  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event']) onInputChange(event: Event) {
    const inputElement = this.el.nativeElement as HTMLInputElement;
    inputElement.value = this.capitalize(inputElement.value);
  }

  capitalize(value: string): string {
    if (this.capitalizeType === 'first') {
      return value.replace(/\b\w/g, (char) => char.toUpperCase());
    } else if (this.capitalizeType === 'all') {
      return value.toUpperCase();
    }
    return value;
  }
}