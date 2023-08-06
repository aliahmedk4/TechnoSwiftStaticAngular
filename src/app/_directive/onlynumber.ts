import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: 'input[numbersOnly]'
})
export class NumberDirective {
  @Input() allowDecimal = false;
  @Input() maxLength: number = 10; // Default value is set to 10

  constructor() {}

  @HostListener('input', ['$event'])
  onInput(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const currentValue = inputElement.value;

    // Regular expression to match only numbers and optionally decimal numbers
    const regex = this.allowDecimal ? new RegExp(`^[0-9]*\\.?[0-9]{0,${this.maxLength}}$`) : new RegExp(`^[0-9]{0,${this.maxLength}}$`);

    if (!regex.test(currentValue)) {
      // If the input value doesn't match the allowed pattern, reset the input value
      inputElement.value = currentValue.replace(/[^\d\.]/g, '').slice(0, this.maxLength);
    }
  }
}