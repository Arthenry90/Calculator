// const calculator = document.querySelector('.calculator');
// const buttons = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

// buttons.forEach(num => {
//     const button = document.createElement('button');
//     button.textContent = num;
//     calculator.appendChild(button);
// });

function add(num1, num2){
    Number(num1);
    Number(num2);
    return     Number(num1) + Number(num2);
}

function subtract(num1, num2){
    Number(num1);
    Number(num2);
    return num1 - num2;
}

function multiply(num1 , num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1 / num2;
}

function operate(num1,operator,num2){
  switch (operator){
    case "+":
        console.log( "lalou")
        return add(num1,num2);
    case "-":
        return multiply(num1,num2);
    case "x":
        return multiply(num1,num2);
    case "/":
        return divide(num1,num2);
  }
}

let acumulador = 1;
let num1;
let num2;
let operator;

const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".buttons button:not(.add, .subtract, .divide, .multiply, .operate, .clear)");
const addButton = document.querySelector(".add");
const subtractButton = document.querySelector(".subtract");
const multiplyButton = document.querySelector(".multiply");
const divideButton = document.querySelector(".divide");
const operateButton = document.querySelector(".operate");
const clearButton = document.querySelector(".clear");


clearButton.addEventListener("click", () => {
    num1 = "";
    num2 = "";
    operator = "";
    display.innerHTML = "";
})

operateButton.addEventListener("click", () =>{
    if(!(num1)){
        console.log("pq clicou jegue");
    }else{
        num2 = display.innerHTML;
        display.innerHTML = operate(num1,operator,num2);
    }
} )



// Adiciona eventos de clique a todos os botões
buttons.forEach(button => {
    button.addEventListener("click", () => {
        // Concatena o número clicado ao que já está no display
        display.innerHTML += button.textContent;
    });
});

addButton.addEventListener("click",() => {
        if(!(num1)){
        num1 = display.innerHTML;
        operator = "+";
        display.innerHTML = ""; }
        else{
            num2 = display.innerHTML;
            display.innerHTML = add(num1,num2);
        }
})

subtractButton.addEventListener("click",() => {
    if(!(num1)){
    num1 = display.innerHTML;
    operator = "-";
    console.log(num1);
    display.innerHTML = "";}
    else{

        num2 = display.innerHTML;
        console.log(num2);

        display.innerHTML = subtract(num1,num2);
        console.log(num1 - num2);

    }
})
multiplyButton.addEventListener("click",() => {
    if(!(num1)){
    num1 = display.innerHTML;
    operator = "x";
    console.log(num1);
    display.innerHTML = "";}
    else{

        num2 = display.innerHTML;
        console.log(num2);

        display.innerHTML = multiply(num1,num2);
        console.log(num1 - num2);

    }
})
divideButton.addEventListener("click",() => {
    if(!(num1)){
    num1 = display.innerHTML;
    console.log(num1);
    operator = "/";
    display.innerHTML = "";}
    else{

        num2 = display.innerHTML;
        console.log(num2);

        display.innerHTML = divide(num1,num2);
        console.log(num1 - num2);

    }
})