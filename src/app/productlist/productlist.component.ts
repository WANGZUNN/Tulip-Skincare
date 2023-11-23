import { Component } from '@angular/core';

@Component({
  selector: 'productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})

export class ProductlistComponent {
    
  product = {
    Name : "New / Iphone 15 Pro Max",
    Price: 1400,
    Color: "Matte black",
    //Set discount as percentage
    discount: 5.2,
    instock: 14,
    Pimg: 'assets/product-apple-iphone/IMAGE 2023-11-06 14:04:30.jpg',
  }

  discountprice(){
    return (this.product.Price*this.product.discount)/100 ;
  }
  stockcheck(){
    return ( this.product.instock > 0 ? 'Only ' + this.product.instock + ' items left': 'Not in Stock' )
  }
}
