import { Component } from '@angular/core';
import { DemoHostDirective } from './demo-host.directive';

export abstract class HostDirectiveBase {}

@Component({
  selector: 'app-host-directive',
  template: `<ng-content />`,
  hostDirectives: [
    {
      directive: DemoHostDirective,
      inputs: ['demoHostInput'],
    },
  ],
  host: {
    '[attr.data-host]': '"host-component"',
  },
})
export class HostDirectiveComponent extends HostDirectiveBase {

}
