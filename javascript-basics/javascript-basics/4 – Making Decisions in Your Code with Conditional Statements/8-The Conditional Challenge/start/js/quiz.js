/* 
  1. Store correct answers
   - When quiz begins, no answers are correct
*/
let counter = 0;


const ask0 = prompt('1 + 1: ?');
if (ask0 === '2') counter +=1;

const ask1 = prompt('1 + 2: ?');
if (ask1 === '3') counter +=1;

const ask2 = prompt('1 + 3: ?');
if (ask2 === '4') counter +=1;

const ask3 = prompt('1 + 4: ?');
if (ask3 === '5') counter +=1;

const ask4 = prompt('1 + 5: ?');
if (ask4 === '6') counter +=1;

// 2. Store the rank of a player
let rank;

if (counter < 1)
{
 rank = 'No crown';
}
else if (counter >= 1 && 3 >counter) {
 rank = 'Bronze';
} else if (counter >= 3 && 4 >counter) {
 rank = 'silver';
} else if (counter === 5) {
  rank = 'Gold';
}
else {
  rank = 'indefinido';
}


// 3. Select the <main> HTML element

const main = document.querySelector('main'); // forma de tree house

/* const shoutMessage = `<h1>You have ${counter} of 5 answers correct!!</h1>
<br> <h2> Rank: ${rank} </h2>
`;

document.querySelector('main').innerHTML = shoutMessage;
/* // forma por Alan



  4. Ask at least 5 questions
   - Store each answer in a variable
   - Keep track of the number of correct answers
*/


/*
  5. Rank player based on number of correct answers
   - 5 correct = Gold
   - 3-4 correct = Silver
   - 1-2 correct = Bronze
   - 0 correct = No crown
*/

main.innerHTML  = `<h1>You have ${counter} of 5 answers correct!!</h1>
<br> <h2> Rank: ${rank} </h2>`;
// 6. Output results to the <main> element

