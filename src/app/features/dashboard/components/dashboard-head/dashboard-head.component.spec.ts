import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardHeadComponent } from './dashboard-head.component';

describe('DashboardHeadComponent', () => {
  let component: DashboardHeadComponent;
  let fixture: ComponentFixture<DashboardHeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardHeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
