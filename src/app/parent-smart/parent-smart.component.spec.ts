import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentSmartComponent } from './parent-smart.component';

describe('ParentSmartComponent', () => {
  let component: ParentSmartComponent;
  let fixture: ComponentFixture<ParentSmartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentSmartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentSmartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
