import { Component } from '@angular/core';

@Component({
  selector: 'productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})



export class ProductlistComponent {
  products = [
    {
      id: 1,
      Name: "Winky Eye ",
      Price: 5,
      Color: "Pink",
      discount: 10,
      instock: 14,
      Pimg: 'assets/skincare-product/1.jpg',
    },
    {
      id: 2,
      Name: "Make up Remover",
      Price: 8, // Corrected to a number
      Color: "Orange",
      discount: 50,
      instock: 7,
      Pimg: 'assets/skincare-product/2.jpg',
    },
    {
      id: 3,
      Name: "Two-way-powerder",
      Price: 14, // Corrected to a number
      Color: "Soft pink",
      discount: 20,
      instock: 13,
      Pimg: 'assets/skincare-product/3.jpg',
    }
  ];

  quantity: number[] = [0, 0]; // Initial quantity for each product

  incrementQuantity(index: number) {
    if (this.quantity[index] < this.products[index].instock) {
      this.quantity[index]++;
    }
  }

  decrementQuantity(index: number) {
    if (this.quantity[index] > 0) {
      this.quantity[index]--;
    }
  }

  discountprice(products: any, index: number) {
    // Calculate and return the discounted price for each product
    const discountedPrice = (products.Price * products.discount) / 100;
    return discountedPrice;
  }

  stockcheck(products: any) {
    return products.instock > 0 ? 'Only ' + products.instock + ' items left' : 'Not in Stock';
  }
}






