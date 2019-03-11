import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelnessAndSpurComponent } from './welness-and-spur.component';

describe('WelnessAndSpurComponent', () => {
  let component: WelnessAndSpurComponent;
  let fixture: ComponentFixture<WelnessAndSpurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelnessAndSpurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelnessAndSpurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
