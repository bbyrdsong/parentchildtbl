import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentPrezComponent } from './parent-prez.component';

describe('ParentPrezComponent', () => {
  let component: ParentPrezComponent;
  let fixture: ComponentFixture<ParentPrezComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentPrezComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentPrezComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
