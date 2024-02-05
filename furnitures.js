function getFurniture (chairQuantity, tableQuantity, bedQuantity){
    let perChair = 50;
    let perTable = 60;
    let perBed = 100;

    let chairTotalWood = perChair * chairQuantity;
    let tableTotalWood = perTable * tableQuantity;
    let bedTotalWood = perBed * bedQuantity;

    let totalWood =chairTotalWood + tableTotalWood + bedTotalWood;
    return totalWood;
}
let wood = getFurniture( 2, 1,3);
console.log(wood);