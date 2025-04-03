import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerPerformanceComponent } from './worker-performance.component';

describe('WorkerPerformanceComponent', () => {
  let component: WorkerPerformanceComponent;
  let fixture: ComponentFixture<WorkerPerformanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkerPerformanceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkerPerformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
