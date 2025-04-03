import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyInstallationsComponent } from './my-installations.component';

describe('MyInstallationsComponent', () => {
  let component: MyInstallationsComponent;
  let fixture: ComponentFixture<MyInstallationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyInstallationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyInstallationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
