import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  isLoading= new BehaviorSubject(true);
  constructor() { }

  showLoader(){
    this.isLoading.next(true);
  }
  hideLoading(){
    this.isLoading.next(false)
  }
}
