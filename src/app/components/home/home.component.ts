import { Component, OnInit, Optional, Self, SkipSelf } from '@angular/core';
import { LoggerService } from 'src/app/services/logger.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  constructor(@SkipSelf() private log: LoggerService) {
    if (this.log) {
      this.log.info('HomeComponent is created');
    } else {
      console.warn('LoggerService is not available');
    }
  }
  ngOnInit(): void {
  }
}
