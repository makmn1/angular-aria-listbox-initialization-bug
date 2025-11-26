import { Component } from '@angular/core';
import { ListboxHostComponent } from './listbox-host.component';

@Component({
  standalone: true,
  template: `
    <app-listbox-host
      data-testid="host"
      orientation="horizontal">
      <button data-testid="inner-btn">Inner</button>
    </app-listbox-host>
  `,
  imports: [ListboxHostComponent],
})
export class ListboxHostTestComponent {}
