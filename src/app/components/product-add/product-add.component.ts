import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IProduct } from 'src/app/models/product.module';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  @Output() onAdd = new EventEmitter<{ name: string, price: number }>()
  constructor() { }
  handlerSubmit(f: any) {
    this.onAdd.emit(f.value)
  }
  ngOnInit(): void {
  }

}
