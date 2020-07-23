// Collect input from a user

const number = prompt('ingresa numero mas alto');
const number2 = prompt('ingresa numero mas bajo');

// Convert the input to a number
const num1 = +number;
const num2 = +number2;




if (num1 && num2){
// Use Math.random() and the user's number to generate a random number
const rand = Math.floor( Math.random() * (num1 - num2 +1)) + num2;
// Create a message displaying the random number
alert(`${rand} es un numero entre ${num2} y ${num1}`);


} else{
	alert('ingresa numeros validos')
}



//solución de treehouse:

//const inputHigh = prompt('ingresa numero:');
//const highNumber = parseInt(inputHigh);
//const randomNumber = Math.floor(Math.random() * highNumber) + 1;
//console.log (`${randomNumber} es un numero random entre 1 y ${highNumber}`);

