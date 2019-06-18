import { Component, OnInit, Input } from '@angular/core';
import { DEFAULT_STATUS_VALUES, TimelineFlowOptions, StepsData } from './timeline-flow.options'
import { Options } from 'selenium-webdriver';

@Component({
  selector: 'app-timeline-flow',
  templateUrl: './timeline-flow.component.html',
  styleUrls: ['./timeline-flow.component.css']
})
export class TimelineFlowComponent implements OnInit {

  @Input() data: StepsData[] = [];
  @Input() options: TimelineFlowOptions = DEFAULT_STATUS_VALUES;

  constructor() { }

  ngOnInit() {
  }

  getStyles(step, type) {
    const statusRec: any = this.options.statuses.find(item => item.text === step.status);
    const styles = {};
    if (statusRec && statusRec.styles) {
      switch (type) {
        case 'icon-styles':
          if (statusRec.styles.iconPath) {
            styles['content'] = `url(${statusRec.styles.iconPath})`;
          }
          if (statusRec.styles.textColor) {
            styles['color'] = statusRec.styles.textColor;
          }
          styles['font-weight'] = 'bold';
          break;
        case 'text-styles':
          if (statusRec.styles.textColor) {
            styles['color'] = statusRec.styles.textColor;
          }
          break;
        case 'icon-class':
          if (statusRec.styles.iconClass) {
            styles[statusRec.styles.iconClass] = true;
          }
          break;
        case 'connector-styles':
          if (statusRec.styles.borderColor) {
            styles['border-left-color'] = statusRec.styles.borderColor;
          }
          break;
      }
    }
    return styles;
  }

}
