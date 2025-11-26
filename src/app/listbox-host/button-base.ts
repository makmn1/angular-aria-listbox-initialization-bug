import {Directive, input} from '@angular/core';

@Directive({
  selector: 'button[demoButtonBase]',
  standalone: true,
})
export class ButtonBase {
  value = input()
}
