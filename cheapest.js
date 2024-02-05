let mobile =[
    {name:'samsung', price:30000, camera:'12mp', color:'black'},
    {name:'xoami', price:18000, camera:'12mp', color:'black'},
    {name:'oppo', price:20000, camera:'12mp', color:'black'},
    {name:'iphone', price:100000, camera:'12mp', color:'black'},
    {name:'walton', price:31000, camera:'12mp', color:'black'}
]
function cheapestPhone(phones){
    let min = mobile[0];
    for(let phone of phones){
        //console.log(phone);
        if(phone.price < min.price){
            min = phone;
        }
    }
    return min;
}
let cheap = cheapestPhone(mobile);
console.log('cheapest price is',cheap);