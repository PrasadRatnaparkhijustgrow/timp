import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorFinancialsComponent } from './vendor-financials.component';

describe('VendorFinancialsComponent', () => {
  let component: VendorFinancialsComponent;
  let fixture: ComponentFixture<VendorFinancialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VendorFinancialsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendorFinancialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
