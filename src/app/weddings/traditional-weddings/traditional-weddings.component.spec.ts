import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TraditionalWeddingsComponent } from './traditional-weddings.component';

describe('TraditionalWeddingsComponent', () => {
  let component: TraditionalWeddingsComponent;
  let fixture: ComponentFixture<TraditionalWeddingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraditionalWeddingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraditionalWeddingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
