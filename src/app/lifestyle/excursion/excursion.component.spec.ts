import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcursionComponent } from './excursion.component';

describe('ExcursionComponent', () => {
  let component: ExcursionComponent;
  let fixture: ComponentFixture<ExcursionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExcursionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcursionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
