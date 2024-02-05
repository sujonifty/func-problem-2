function add(num1, num2){
    let add = num1 + num2;
    return add;
}
function subtract(num1, num2){
    let subtract = num1 - num2;
    return subtract;
}
function multiply(num1, num2){
    let multiply = num1 * num2;
    return multiply;
}
function divide(num1, num2){
    let divide = num1 / num2;
    return divide;
}

function calculator (a, b, operator){
    if(operator === 'add'){
        let result = add(a, b);
        return result;
    }
    else if(operator === 'subtract'){
        let result = subtract(a, b);
        return result;
    }
    else if(operator === 'multiply'){
        let result = multiply(a, b);
        return result;
    }
    else if(operator === 'divide'){
        let result = divide(a, b);
        return result;
    }
    else{
        console.log("only 'add', 'subtract', 'multiply' operation is allowed. 'divide' ")
    }
}
let calculation = calculator(4, 2, 'divide');
console.log( 'Result =',calculation);