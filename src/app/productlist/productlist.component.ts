import { Component } from '@angular/core';

@Component({
  selector: 'productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})

export class ProductlistComponent {
    name:string = "";

  product_1 = {
    Name: "New / Iphone 15 Pro Max",
    Price: 1500,
    Color: "Matte black",
    // Set discount as percentage
    discount: 20,
    instock: 10,
    Pimg: 'assets/product-apple-iphone/IMAGE 2023-11-06 14:04:30.jpg',
    
  };


















  
  quantity: number = 0; // Initial quantity

  incrementQuantity() {
    if (this.quantity < this.product_1.instock) {
      this.quantity++;
    }
  }

  decrementQuantity() {
    if (this.quantity > 0) {
      this.quantity--;
    }
  }
  discountprice(product:any) {
    // Calculate and return the discounted price
    const discountedPrice = (product.Price * product.discount) / 100;
    return discountedPrice;
  }

  stockcheck(product:any) {
    return (product.instock > 0 ? 'Only ' + product.instock + ' items left' : 'Not in Stock');
  }


}


