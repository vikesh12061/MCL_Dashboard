import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineFlowComponent } from './timeline-flow.component';

describe('TimelineFlowComponent', () => {
  let component: TimelineFlowComponent;
  let fixture: ComponentFixture<TimelineFlowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimelineFlowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
