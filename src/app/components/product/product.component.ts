import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/product.module';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productDetail!: IProduct
  productName: string = ""
  isStatus: boolean = true
  @Input() products!: IProduct[]
  constructor() { }
  handlerClick = () => {
    this.isStatus = !this.isStatus
  }
  removeItem = (id: number) => {
    this.products = this.products.filter(item => item.id !== id)
  }
  ngOnInit(): void {
  }
  onHandlerDetail(product: IProduct) {
    this.productDetail = product
  }

}
