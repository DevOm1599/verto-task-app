import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalPaymentsComponent } from './global-payments.component';

describe('GlobalPaymentsComponent', () => {
  let component: GlobalPaymentsComponent;
  let fixture: ComponentFixture<GlobalPaymentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GlobalPaymentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlobalPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
