import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it } from 'vitest';
import { HostDirectiveComponent } from './host-directive.component';

@Component({
  standalone: true,
  template: `
    <app-host-directive
      [demoHostInput]="'from-test'"
      data-testid="host">
      <button data-testid="inner-btn">Inner button</button>
    </app-host-directive>
  `,
  imports: [HostDirectiveComponent],
})
class TestHostComponent {}

describe('HostDirectiveComponent with hostDirectives', () => {
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create the host test component', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render the host component', () => {
    const hostEl: HTMLElement | null =
      fixture.nativeElement.querySelector('[data-testid="host"]');

    expect(hostEl).not.toBeNull();
    expect(hostEl!.getAttribute('data-host')).toBe('host-component');
  });
});
