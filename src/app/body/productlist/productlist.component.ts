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
    },
    {
      id: 2,
      Name: "Make up Remover",
      Price: 8,
      Color: "Orange",
      discount: 50,
      instock: 8,
      Pimg: 'assets/skincare-product/2.jpg',
    },
    {
      id: 3,
      Name: "Two-way-powerder",
      Price: 14,
      Color: "Soft pink",
      discount: 20,
      instock: 9,
      Pimg: 'assets/skincare-product/3.jpg',
    },
    {
      id: 4,
      Name: "Nee-care",
      Price: 5,
      Color: "pink",
      discount: 0,
      instock: 20,
      Pimg: 'assets/skincare-product/4.jpg',
    },
    {
      id: 5,
      Name: "Vit-C+ ALA",
      Price: 15,
      Color: "Green ",
      discount: 0,
      instock: 30,
      Pimg: 'assets/skincare-product/5.jpg',
    },
    {
      id: 6,
      Name: "GLAM & GLOW",
      Price: 3,
      Color: "Soft pink",
      discount: 10,
      instock: 100,
      Pimg: 'assets/skincare-product/6.jpg',
    },
    {
      id: 7,
      Name: "GANYA",
      Price: 20,
      Color: "Green",
      discount: 0,
      instock: 15,
      Pimg: 'assets/skincare-product/7.jpg',
    },
    {
      id: 8,
      Name: "Odbo",
      Price: 10,
      Color: "Brown",
      discount: 0,
      instock: 20,
      Pimg: 'assets/skincare-product/8.jpg',
    },
    {
      id: 9,
      Name: "Triphala Plus",
      Price: 15,
      Color: "Green",
      discount: 0,
      instock: 20,
      Pimg: 'assets/skincare-product/9.jpg',
    },
    {
      id: 10,
      Name: "Poppy Bright",
      Price: 7,
      Color: "Pink",
      discount: 0,
      instock: 20,
      Pimg: 'assets/skincare-product/10.jpg',
    },
    {
      id: 11,
      Name: "Today's mood",
      Price: 15,
      Color: "Brown",
      discount: 0,
      instock: 25,
      Pimg: 'assets/skincare-product/11.jpg',
    },
    {
      id: 12,
      Name: "Lemon me",
      Price: 3,
      Color: "light-blue",
      discount: 0,
      instock: 60,
      Pimg: 'assets/skincare-product/12.jpg',
    }
  ];

  quantity: number[] = [0, 0, 0, 0, 0,0,0,0,0,0,0,0]; // Initial quantity for each product

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


  stockcheck(product: any) {
    return product.instock > 0 ? 'Only ' + product.instock + ' items left' : 'Not in Stock';
  }
}
