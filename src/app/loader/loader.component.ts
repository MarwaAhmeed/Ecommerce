import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LoaderService } from '../services/loader.service';
@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {

  isLoading: BehaviorSubject<boolean> = this.LoaderService.isLoading;
  constructor(private LoaderService :LoaderService) {

  }

  ngOnInit(): void {

  }

}
