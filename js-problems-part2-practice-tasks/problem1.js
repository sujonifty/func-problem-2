/*
### Task -1: 
Find the lowest number in the array below.
<br>
`const heights2 = [167, 190, 120, 165, 137];`
---
*/
const heights2 = [167, 190, 120, 165, 137];
function getMax(numbers) {
    let max = 0;
    for (let item of numbers) {
        if (item > max) {
            max = item;
        }

    }
    return max;
}
let maximum = getMax(heights2);
console.log('maximum', maximum);