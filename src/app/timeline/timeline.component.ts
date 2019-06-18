import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  statusData: any[] = [{
    step: 'Step 1',
    status: 'Completed'
  }, {
    step: 'Step 2',
    status: 'Completed'
  }, {
    step: 'Step 3',
    status: 'Completed'
  }, {
    step: 'Step 4',
    status: 'In progress'
  }, {
    step: 'Step 5',
    status: 'Completed'
  }, {
    step: 'Step 6',
    status: 'Not Started'
  }];

}
