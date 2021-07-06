import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/interfaces';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  products: IProduct[] = [
    {
      id: 1,
      pathImg: "../../../assets/images/product-105-0-med_res.jpg",
      name: "Chocolate Cherry Torte (8-inch round)",
      description: "Chocolate chiffon cake slice in three layers, moistened with aromatic kirsch and filled with delicious strawberry cream filling. The cake is iced with a combination of plain and chocolate whipped cream marbled together . The side is generously covered with chocolate shavings and topped with maraschino cherries.",
      price: 18.00
    },
    {
      id: 2,
      pathImg: "../../../assets/images/product-105-0-med_res.jpg",
      name: "Chocolate Cherry Torte (8-inch round)",
      description: "Chocolate chiffon cake slice in three layers, moistened with aromatic kirsch and filled with delicious strawberry cream filling. The cake is iced with a combination of plain and chocolate whipped cream marbled together . The side is generously covered with chocolate shavings and topped with maraschino cherries.",
      price: 18.00
    },
    {
      id: 3,
      pathImg: "../../../assets/images/product-105-0-med_res.jpg",
      name: "Chocolate Cherry Torte (8-inch round)",
      description: "Chocolate chiffon cake slice in three layers, moistened with aromatic kirsch and filled with delicious strawberry cream filling. The cake is iced with a combination of plain and chocolate whipped cream marbled together . The side is generously covered with chocolate shavings and topped with maraschino cherries.",
      price: 18.00
    },
    {
      id: 4,
      pathImg: "../../../assets/images/product-105-0-med_res.jpg",
      name: "Chocolate Cherry Torte (8-inch round)",
      description: "Chocolate chiffon cake slice in three layers, moistened with aromatic kirsch and filled with delicious strawberry cream filling. The cake is iced with a combination of plain and chocolate whipped cream marbled together . The side is generously covered with chocolate shavings and topped with maraschino cherries.",
      price: 18.00
    },
    {
      id: 5,
      pathImg: "../../../assets/images/product-105-0-med_res.jpg",
      name: "Chocolate Cherry Torte (8-inch round)",
      description: "Chocolate chiffon cake slice in three layers, moistened with aromatic kirsch and filled with delicious strawberry cream filling. The cake is iced with a combination of plain and chocolate whipped cream marbled together . The side is generously covered with chocolate shavings and topped with maraschino cherries.",
      price: 18.00
    },
    {
      id: 6,
      pathImg: "../../../assets/images/product-105-0-med_res.jpg",
      name: "Chocolate Cherry Torte (8-inch round)",
      description: "Chocolate chiffon cake slice in three layers, moistened with aromatic kirsch and filled with delicious strawberry cream filling. The cake is iced with a combination of plain and chocolate whipped cream marbled together . The side is generously covered with chocolate shavings and topped with maraschino cherries.",
      price: 18.00
    },
    {
      id: 7,
      pathImg: "../../../assets/images/product-105-0-med_res.jpg",
      name: "Chocolate Cherry Torte (8-inch round)",
      description: "Chocolate chiffon cake slice in three layers, moistened with aromatic kirsch and filled with delicious strawberry cream filling. The cake is iced with a combination of plain and chocolate whipped cream marbled together . The side is generously covered with chocolate shavings and topped with maraschino cherries.",
      price: 18.00
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
