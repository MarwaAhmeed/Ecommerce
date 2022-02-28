import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../services/service.service'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  product :any;
  counter=0;
  constructor(private CounterService: ServiceService) {
  }

  ngOnInit(): void {
    this.CounterService.getProd().subscribe(
      (val) => (this.product = val)
    );
    this.CounterService.getCounterValue().subscribe(
      (val) => (this.counter = val)
    );
    console.log(this.product)
  }
  removeItem(id:number){
    this.product=this.product.filter( (pro:any) =>( pro.id !=id))
    this.CounterService.setCounterValue(--this.counter);
  }
}
