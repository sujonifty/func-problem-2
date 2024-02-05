let height = [24,55,33,54,66,48,98];
function getMax (numbers){
    let num = height[0];
    for(let number of numbers){
        if(num < number){
            num=number;
        }
    }
    return num;
}
let maxNumber = getMax(height);
console.log('The maximum number is',maxNumber);