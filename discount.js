function getDiscount(quantity){
    if(quantity <= 100){
        return quantity * 100;
    }
    else if(quantity <= 200){
        return quantity * 90;
    }
    else{
        return quantity * 70;
    }
}
let discount = getDiscount(210);
console.log('Total price after discount =',discount);