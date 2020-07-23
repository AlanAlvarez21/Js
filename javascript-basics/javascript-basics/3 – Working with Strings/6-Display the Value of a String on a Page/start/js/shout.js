const stringToShout = prompt("ingresa alguna frase");
const shout = stringToShout.toUpperCase();
const shoutMessage = `<h2>La frase es: ${shout}.</h2>`;


document.querySelector("main").innerHTML = shoutMessage ;

