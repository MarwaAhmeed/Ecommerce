import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private counter = new BehaviorSubject(0);
  private prod =new BehaviorSubject([])
  constructor(private http: HttpClient) { }

  getProductList() {
    return this.http.get('https://fakestoreapi.com/products')
  }
  getProductDetails(id:number){
    const url=`https://fakestoreapi.com/products/${id}`;
    return this.http.get(url);
  }
  getCounterValue(){
    return this.counter;
  }

  setCounterValue(newCounterVal : number){
    this.counter.next(newCounterVal);
  }
  getProd(){
    console.log(this.prod);
    return this.prod;
  }

  setProd(newPro : any){
    this.prod.next(this.prod.getValue().concat(newPro));
    console.log(this.prod);
  }
}
