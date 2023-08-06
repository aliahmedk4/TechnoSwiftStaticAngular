import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[EmailValidator]'
})
export class EmailValidatorDirective {
  private emailRegex: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  constructor(private el: ElementRef) {}

  @HostListener('blur')
  validateEmailOnBlur() {
    const inputValue = this.el.nativeElement.value;
    if (inputValue.trim() !== '' && !this.emailRegex.test(inputValue)) {
      this.el.nativeElement.classList.add('invalid-email');
    } else {
      this.el.nativeElement.classList.remove('invalid-email');
    }
  }
}
