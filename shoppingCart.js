let goods = [
    { name: 'sampu', price: 200, quantity: 2 },
    { name: 'chiruni', price: 100, quantity: 5 },
    { name: 'shirt', price: 700, quantity: 2 },
    { name: 'pant', price: 1200, quantity: 3 }
]
function getShoppingCart(products) {
    let totalPrice = 0;
    for (let product of products) {
        let productCost = product.price * product.quantity;
        totalPrice = totalPrice + productCost;
    }
    return totalPrice;
}
let myProduct = getShoppingCart(goods);
console.log(myProduct);