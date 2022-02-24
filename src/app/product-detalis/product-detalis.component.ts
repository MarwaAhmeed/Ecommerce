import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import Products from '../../assets/Product.json';

@Component({
  selector: 'app-product-detalis',
  templateUrl: './product-detalis.component.html',
  styleUrls: ['./product-detalis.component.css']
})
export class ProductDetalisComponent implements OnInit {
  productDetalis:any;
  constructor(private activatedRoute: ActivatedRoute) {
    const activeID = this.activatedRoute.snapshot.params['id'];
  this.productDetalis=Products.find(product =>product.id == activeID);
    console.log(this.productDetalis);
  }

  ngOnInit(): void {
  }

}
