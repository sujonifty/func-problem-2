let height = [24,55,33,54,66,48,22,98];
function getMin (numbers){
    let min = height[0];
    for(let number of numbers){
        if(number < min){
            min=number;
        }
    }
    return min;
}
let minNumber = getMin(height);
console.log('The minimum number is',minNumber);