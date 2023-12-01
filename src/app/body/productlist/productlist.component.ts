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
      Name: "Winky Eye",
      Price: 5,
      Color: "Pink",
      discount: 10,
      instock: 14,
      Pimg: 'assets/skincare-product/1.jpg',
      is_in_inventory: true,
    },
    {
      id: 2,
      Name: "Make up Remover",
      Price: 8,
      Color: "Orange",
      discount: 50,
      instock: 0,
      Pimg: 'assets/skincare-product/2.jpg',
      is_in_inventory: true,
    },
    {
      id: 3,
      Name: "Two-way-powerder",
      Price: 14,
      Color: "Soft pink",
      discount: 20,
      instock: 9,
      Pimg: 'assets/skincare-product/3.jpg',
      is_in_inventory: true,
    },
    {
      id: 4,
      Name: "Nee-care",
      Price: 6,
      Color: "pink",
      discount: 20,
      instock: 0,
      Pimg: 'assets/skincare-product/4.jpg',
      is_in_inventory: true,
    },
    {
      id: 5,
      Name: "Vit-C+ ALA",
      Price: 15,
      Color: "Green ",
      discount: 0,
      instock: 30,
      Pimg: 'assets/skincare-product/5.jpg',
      is_in_inventory: true,
    },
    {
      id: 6,
      Name: "GLAM & GLOW",
      Price: 3,
      Color: "Soft pink",
      discount: 10,
      instock: 100,
      Pimg: 'assets/skincare-product/6.jpg',
      is_in_inventory: true,
    },
    {
      id: 7,
      Name: "GANYA",
      Price: 20,
      Color: "Green",
      discount: 0,
      instock: 0,
      Pimg: 'assets/skincare-product/7.jpg',
      is_in_inventory: true,
    },
    {
      id: 8,
      Name: "Odbo",
      Price: 10,
      Color: "Brown",
      discount: 0,
      instock: 20,
      Pimg: 'assets/skincare-product/8.jpg',
      is_in_inventory: true,
    },
    {
      id: 9,
      Name: "Triphala Plus",
      Price: 15,
      Color: "Green",
      discount: 5,
      instock: 20,
      Pimg: 'assets/skincare-product/9.jpg',
      is_in_inventory: true,
    },
    {
      id: 10,
      Name: "Poppy Bright",
      Price: 7,
      Color: "Pink",
      discount: 10,
      instock: 20,
      Pimg: 'assets/skincare-product/10.jpg',
      is_in_inventory: true,
    },
    {
      id: 11,
      Name: "Today's mood",
      Price: 15,
      Color: "Brown",
      discount: 0,
      instock: 0,
      Pimg: 'assets/skincare-product/11.jpg',
      is_in_inventory: true,
    },
    {
      id: 12,
      Name: "Lemon me",
      Price: 3,
      Color: "light-blue",
      discount: 5,
      instock: 10,
      Pimg: 'assets/skincare-product/12.jpg',
      is_in_inventory: true,
    }
  ];
  minQuantity: number = 0;

  quantity: number[] = Array(this.products.length).fill(0); // Initial quantity for each product

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

  discountprice(product: any, index: number) {
    // Calculate and return the discounted price for each product
    const discountedPrice = (product.Price * product.discount) / 100;
    return discountedPrice;
  }
  discountpercentage(product: any, index: number) {
    // Calculate and return the discounted price for each product
    return product.discount
    
  }
  stockcheck(product: any) {
    return product.instock > 0 ? 'Only ' + product.instock + ' items left' : 'Not in Stock';
  }

  is_in_available(product: any, index:number){
      return product.instock > 0 ? 'Available' : 'Not Available' ;
  }

  is_in_inventory(product: any, index: number): boolean {
    return product.instock > 0;
  }
  

}
