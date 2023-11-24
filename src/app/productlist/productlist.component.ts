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
    Price: 1400,
    Color: "Matte black",
    // Set discount as percentage
    discount: 15,
    instock: 6,
    Pimg: 'assets/product-apple-iphone/IMAGE 2023-11-06 14:04:30.jpg',
  }

  ontest(){
    this.name = "Processing please wait";
 }


  // product_2 = {
  //   Name: "Sok HengPhal",
  //   Price: 10,
  //   Color: "Tor innet",
  //   discount: 50,
  //   instock: 1,
  //   Pimg: 'assets/product-apple-iphone/IMAGE 2023-11-23 18:27:45.jpg',
  // }

  discountprice(product:any) {
    // Calculate and return the discounted price
    const discountedPrice = (product.Price * product.discount) / 100;
    return discountedPrice;
  }

  stockcheck(product:any) {
    return (product.instock > 0 ? 'Only ' + product.instock + ' items left' : 'Not in Stock');
  }

}
