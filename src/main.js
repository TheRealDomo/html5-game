let randomInteger = Math.floor(Math.random() * 20) + 1;
let guess;
let guesses = 0;


while (guess != randomInteger) {
  guess = parseInt(prompt("What number am I thinking of?"), 10);
  if (guess === randomInteger) {
    break;
  }
  guesses++;
  if (guess < randomInteger) {
    alert("Higher!")
  }else{
    alert("Lower")
  }
}
alert(`Good Job! You got it in ${guesses} guesses!`)
