import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ServiceService} from '../services/service.service'

@Component({
  selector: 'app-product-detalis',
  templateUrl: './product-detalis.component.html',
  styleUrls: ['./product-detalis.component.css']
})
export class ProductDetalisComponent implements OnInit {
  productDetalis:any;
   activeID:number=0;
  constructor(private activatedRoute: ActivatedRoute,private service: ServiceService) {
    this.activeID = this.activatedRoute.snapshot.params['id'];
    console.log(this.activeID);
  }


  ngOnInit(): void {
    this.service.getProductDetails(this.activeID).subscribe(
      (res)=>this.productDetalis=res
    )
  }
 addToCart(){
   
 }
}
