import { Component } from '@angular/core';

@Component({
  selector: 'productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent {
    
  product = {
    Name : "Iphone 13 pro max",
    Price: 1300,
    Color: "Matte black",
    Discount_Price: 50,
  }

}
