const prompt = require("prompt-sync")(); // Please don't touch me :)

// The prompt method allows us to take an input from the user.
// Run the code to see how to use prompt.
const Fnumber = prompt("Please enter the first number: ");
const Snumber = prompt("Please enter the second number: ");
const operator = prompt("Please choose the operation (+, -, /, *): ");

if (operator === "+"){ 
    console.log(`${Fnumber} + ${Snumber} = ${parseInt(Fnumber) + parseInt(Snumber)}`);
} else if (operator === "-"){
    console.log(`${Fnumber} - ${Snumber} = ${parseInt(Fnumber) - parseInt(Snumber)}`);
} else if (operator === "/"){
    console.log(`${Fnumber} / ${Snumber} = ${parseInt(Fnumber) / parseInt(Snumber)}`);
} else if (operator === "*"){
    console.log(`${Fnumber} * ${Snumber} = ${parseInt(Fnumber) * parseInt(Snumber)}`);
} else {
    console.log(`Wrong Inputs`);
}
