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

let acumulador = 1;
const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".buttons button:not(.add)");
const addButton = document.querySelector(".add")


let num1;
let num2;

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
        display.innerHTML = "";}
        else{
            num2 = display.innerHTML;
            display.innerHTML = add(num1,num2);
        }
})