// 1. Declare variables and capture input.
const palabra1 = prompt("type an adjective");
const palabra2 = prompt("type a verb");
const palabra3 = prompt("type a noun");

if (palabra1 || palabra2 || palabra3 === false)
{
	alert('youre missing to fill something')
}

else{
// 2. Combine the input with other words to create a story.
const story =  `<p>The history is: ${palabra1 + ' ' + palabra2 + ' ' + palabra3} </p>`;

// 3. Display the story as a <p> inside the <main> element.
document.querySelector("main").innerHTML = story ;
}