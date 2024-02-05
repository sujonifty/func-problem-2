

function layerDiscount(quantity){
    first100price = 100;
    second100price = 90;
    above200price = 70;
    if(quantity<=100){
        let total = quantity * 100;
        return total;
    }
    else if(quantity >= 100){
        let first100total = 100 * 100;
        let remainquantity =quantity - 100;
        let remainTotal = remainquantity * 90;
        let total = first100total + remainTotal;
        return total;
    }
    else{
        let first100total = 100 * 100;
        let second100total = 100 * 90;
        let remainquantity =quantity - 200;
        let remainTotal = remainquantity * 70;
        let total = first100total + second100total + remainTotal;
        return total;
    }
}
totalQuantity = 220;
let price = layerDiscount(totalQuantity);
let totalPrice = totalQuantity * 100;
let totalDiscount = totalPrice -price;
console.log('Total Price =',totalPrice);
console.log('Discount =',totalDiscount);
console.log('Total price after discount =',price);