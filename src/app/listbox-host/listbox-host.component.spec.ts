import { ComponentFixture, TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it } from 'vitest';
import { ListboxHostTestComponent } from './listbox-host-test.component';
import { Listbox } from '@angular/aria/listbox';

describe('ListboxHostComponent with Listbox hostDirectives', () => {
  let fixture: ComponentFixture<ListboxHostTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListboxHostTestComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ListboxHostTestComponent);
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create the test component', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render the host element', () => {
    const hostEl: HTMLElement | null =
      fixture.nativeElement.querySelector('[data-testid="host"]');

    expect(hostEl).not.toBeNull();
    expect(hostEl!.getAttribute('data-host')).toBe('listbox-host');
  });

  it('should have Listbox symbol available (sanity)', () => {
    expect(Listbox).toBeDefined();
  });
});
