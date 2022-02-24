import { Component, OnInit ,Input} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
@Input() Product:any;
  constructor(private router :Router) { }

  ngOnInit(): void {
  }
 goToDetails(){
  this.router.navigate(['/product-detalis',this.Product.id])
}
}
