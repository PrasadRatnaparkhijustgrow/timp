import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstallationReportsComponent } from './installation-reports.component';

describe('InstallationReportsComponent', () => {
  let component: InstallationReportsComponent;
  let fixture: ComponentFixture<InstallationReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstallationReportsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstallationReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
