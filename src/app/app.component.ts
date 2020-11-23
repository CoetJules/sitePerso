import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { PaysService } from './services/pays.service';
import { interval, Subscription } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [PaysService],
})
export class AppComponent implements OnInit {
  seconde: number;
  counterSubscription: Subscription;
  @Input() payName: string;

  constructor() {}

  ngOnInit() {
    const counter = interval(1000);
    this.counterSubscription = counter.subscribe((value: number) => {
      this.seconde = value;
    });
  }

  ngOnDestroy() {
    this.counterSubscription.unsubscribe();
  }
}
