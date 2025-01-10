// const calculator = document.querySelector('.calculator');
// const buttons = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

// buttons.forEach(num => {
//     const button = document.createElement('button');
//     button.textContent = num;
//     calculator.appendChild(button);
// });

function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1 , num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1 / num2;
}

function operate(num1,operator,num2){
    if(operator == "+"  ){
        return add(num1,num2);  
    }
}
