/*Sum
Imagine you have a shopping cart with various items. Each item has a price, and you want to know the total cost of everything in the cart.
e.g. item=[{price: 10.99}, {price: 5.99}, {price: 29.99}] */

let items = [{itemname:"soap", price: 10.99},
             {itemname:"shoes", price: 5.99},
             {itemname:"bread", price: 29.99}]

let totalPrice = 0;

for ( i =0; i<items.length; i++){
    totalPrice += items[i].price
}

console.log(totalPrice)