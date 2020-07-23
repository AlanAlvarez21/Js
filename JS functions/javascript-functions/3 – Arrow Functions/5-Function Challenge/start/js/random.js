/**
 * Returns a random number between two numbers.
 *
 * @param {number} lower - The lowest number value.
 * @param {number} upper - The highest number value.
 * @return {number} The random number value.
 */



// Call the function and pass it different values


const getRandomNumber = (upper, lower) => {
	if ( isNaN(lower) || isNaN(upper)){
    throw Error ('both arguments must be numbers');

	} else {
  return randomNumber = Math.floor(Math.random() * (upper - lower + 1)) + lower;
}
};


console.log(getRandomNumber(50,1));
console.log(`${getRandomNumber(6,4)} is a random number between 6 and 4`);