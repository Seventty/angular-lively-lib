import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivelyComponent } from './lively.component';

describe('LivelyComponent', () => {
  let component: LivelyComponent;
  let fixture: ComponentFixture<LivelyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivelyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LivelyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
