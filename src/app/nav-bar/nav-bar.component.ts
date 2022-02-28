import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../services/service.service'
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  counter = 0;
  constructor(private CounterService: ServiceService) {}

  ngOnInit(): void {
    this.CounterService.getCounterValue().subscribe(
      (val) => (this.counter = val)
    );
  }

}
