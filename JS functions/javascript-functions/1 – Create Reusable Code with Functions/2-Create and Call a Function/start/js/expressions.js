


const getRandomNumber = function(upper) {
  const randomNumber = Math.floor(Math.random() * upper ) + 1;
  return randomNumber;
};

console.log(getRandomNumber(10))


/** otra forma de expresar una funcion 

console.log(getRandomNumber(10));

function getRandomNumber (upper) {
  const randomNumber = Math.floor(Math.random() * upper ) + 1;
  return randomNumber;
}


**/