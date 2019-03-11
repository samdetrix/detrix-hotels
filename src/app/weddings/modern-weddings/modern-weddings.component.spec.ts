import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModernWeddingsComponent } from './modern-weddings.component';

describe('ModernWeddingsComponent', () => {
  let component: ModernWeddingsComponent;
  let fixture: ComponentFixture<ModernWeddingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModernWeddingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModernWeddingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
