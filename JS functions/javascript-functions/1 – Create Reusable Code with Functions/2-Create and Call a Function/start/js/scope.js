let person = 'lee'; //global scope variable 


function greeting() {
	//function scope
  let person = 'Meg';
  alert(`Hi, ${person}!`);
}

function greeting2() {
	//function scope
  let person = 'robert';
  alert(`good morning, ${person}!`);
}

greeting();
alert(`hi ${person}`);

greeting2();
