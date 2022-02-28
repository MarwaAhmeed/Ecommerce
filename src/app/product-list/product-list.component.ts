import { Component, OnInit } from '@angular/core';
// import ProductsList from '../../assets/Product.json';
// import { Products } from './../interfaces/products';
import {ServiceService} from '../services/service.service'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
Products:any;
  constructor(private service: ServiceService) { }

  ngOnInit(): void {
    this.service.getProductList().subscribe(
      (res)=>this.Products=res,
      (err)=> {console.log(err)}
    )
  }

}
