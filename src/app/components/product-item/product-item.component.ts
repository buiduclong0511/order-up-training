import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'src/app/interfaces';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input() data?: IProduct;

  constructor() { }

  ngOnInit(): void {
  }

}
