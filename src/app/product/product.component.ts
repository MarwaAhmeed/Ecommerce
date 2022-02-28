import { Component, OnInit ,Input} from '@angular/core';
import {Router} from '@angular/router';
import {ServiceService} from '../services/service.service'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
@Input() Product:any;
counter=0;
  constructor(private router :Router,private CounterService: ServiceService) { }

  ngOnInit(): void {
    this.CounterService.getCounterValue().subscribe(
      (val) => (this.counter = val)
    );
  }
 goToDetails(){
  this.router.navigate(['/product-detalis',this.Product.id])
}
addToCart(){
  this.CounterService.setCounterValue(++this.counter);
  this.CounterService.setProd(this.Product);
}
}
