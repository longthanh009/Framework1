import { Component } from '@angular/core';
import { IProduct } from './models/product.module';

@Component({
  
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  handlerAdd(product :{name : string,price : number}){
    this.products.push({...product,id : this.products.length +1});
    
  }
  products :IProduct[] = [
    {id : 1 , name: "Product 1", price: 123},
    {id : 2 , name: "Product 2", price: 234},
    {id : 3 , name: "Product 3", price: 345},
  ]
}
