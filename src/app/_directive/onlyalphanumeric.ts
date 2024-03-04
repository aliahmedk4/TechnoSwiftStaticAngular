import { Directive, HostListener, ElementRef, Input } from '@angular/core';
@Directive({
  selector: '[specialIsAlphaNumeric]',
})
export class SpecialCharacterDirective {
  regexStr = '^[a-zA-Z0-9_]*$';
  @Input() isAlphaNumeric: boolean;

  constructor(private el: ElementRef) { }

  @HostListener('keypress', ['$event']) onKeyPress(event: any) {
    return new RegExp(this.regexStr).test(event.key);
  }

  @HostListener('paste', ['$event']) blockPaste(event: KeyboardEvent) {
    this.validateFields(event);
  }

  validateFields(event: any) {
    console.log(event.target.value);
    setTimeout(() => {
      this.el.nativeElement.value = this.el.nativeElement.value
        .replace(/[^a-zA-Z0-9_]/g, ''); // Allow alphanumeric characters and underscores
      event.preventDefault();
    }, 100);
  }

}
