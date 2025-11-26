import {Directive, ElementRef, inject, input, Input} from '@angular/core';

@Directive({
  selector: '[demoHost]',
  standalone: true,
})
export class DemoHostDirective {
  private readonly el = inject<ElementRef<HTMLElement>>(ElementRef);

  demoHostInput = input<string>()

  constructor() {
    const native = this.el.nativeElement;

    native.addEventListener('click', () => {
      native.dataset['demoHostClicked'] = 'true';
      console.log('DemoHostDirective click, input =', this.demoHostInput());
    });
  }
}
