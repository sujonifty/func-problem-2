/*
### Task-3: 
Your task is to calculate the `total budget` required to buy electronics:

        laptop = 35000 tk
        tablet = 15000 tk
        mobile = 20000 tk

Write a JavaScript function named `calculateElectronicsBudget` that takes in the number of `laptop, tablets, and mobile` and returns the `total money required`.

---
*/
function calculateElectronicsBudget (lQuantity, tQuantity, mQuantity) {
    if( typeof lQuantity !== 'number' || typeof tQuantity !== 'number' || typeof mQuantity !== 'number' ){
        return 'Please provide the number of amount. '
    }
    const perLaptop = 35000;
    const perTablet = 15000;
    const perMobile = 20000;
    let totalLaptopPrice = perLaptop * lQuantity;
    let totalTabletPrice = perTablet * tQuantity;
    let totalMobilePrice = perMobile * mQuantity;
    let totalPrice = totalLaptopPrice + totalTabletPrice + totalMobilePrice ;
    return totalPrice;
    
} 
let laptopQuantity = 2;
let tabletQuantity = 'a';
let mobileQuantity = 2;
let totalCost = calculateElectronicsBudget(laptopQuantity, tabletQuantity, mobileQuantity);
console.log('Total Cost:', totalCost);