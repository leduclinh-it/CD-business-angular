import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCustomerDetailComponent } from './modal-customer-detail.component';

describe('ModalCustomerDetailComponent', () => {
  let component: ModalCustomerDetailComponent;
  let fixture: ComponentFixture<ModalCustomerDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalCustomerDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCustomerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
