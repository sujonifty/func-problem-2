/*
### Task -2: 
Find the friend with the smallest name.
<br>
`const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];`

---
*/

const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
function findSmallestName(heights2){
    let smallest = heights2[0].length;
    for(let height of heights2){
        // console.log(height);
        let count = height.length;
        // console.log(count);
        if (count < smallest){
            smallest = count;
        }   
    }  
    return smallest; 
}
let smallestName = findSmallestName(heights2);
console.log(smallestName);