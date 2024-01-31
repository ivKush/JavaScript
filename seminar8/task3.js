'use strict';

class Product {
    constructor(name = '', price = 0) {
        this.name = name;
        this.price = price;
    }
}

class ShoppingCart {
    constructor(customerName, initialTotalCost = 0) {
        this.customerName = customerName;
        this.totalCost = initialTotalCost;
        this.cart = [];
    }

    addItem(product, quantity = 1) {
        if (!(product instanceof Product)) return console.log('Не соответствующий товар');
        this.cart.push([product, quantity]);
    }

    getCurrentTotalCost() {
        // let totalCost = 0;
        for (const el of this.cart) {
            // totalCost = el[0].price * el[1];
            this.totalCost = this.totalCost + 
            (el[0].price * el[1]);
            // this.totalCost = this.totalCost + totalCost;
        }
    }

    checkout() {
        console.log(`Заказ оформлен для ${this.customerName}. Общая стоимость заказа: ${this.totalCost} рублей. Спасибо за покупку`);
    }
}

const prod1 = new Product('coffe', 100);
const prod2 = new Product('tee', 50);
const prod3 = new ShoppingCart('fff', 50);
const customer1 = new ShoppingCart('Ivan');
customer1.addItem(prod1);
customer1.addItem(prod3);
customer1.addItem(prod2, 3);
console.log(customer1.cart);
customer1.getCurrentTotalCost();
customer1.checkout();


