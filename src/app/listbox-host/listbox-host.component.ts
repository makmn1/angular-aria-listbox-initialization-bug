import { Component } from '@angular/core';
import { Listbox } from '@angular/aria/listbox';

export abstract class ListboxHostBase {}

@Component({
  selector: 'app-listbox-host',
  standalone: true,
  template: `<ng-content />`,
  hostDirectives: [
    {
      directive: Listbox,
      inputs: [
        'id',
        'orientation',
        'multi',
        'wrap',
        'selectionMode',
        'focusMode',
        'softDisabled',
        'disabled',
        'readonly',
      ],
    },
  ],
  host: {
    '[attr.data-host]': '"listbox-host"',
  },
})
export class ListboxHostComponent extends ListboxHostBase {}
