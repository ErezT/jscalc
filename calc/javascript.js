var firstNumber = "";
var secondNumber = "";
var digitClicked = "";
var screen = document.getElementById("output");
var digitsOnScreen = "";
var symbol = "";
var haveSum = false;
var reg = /\+/;

function add(x, y) {
  return Number(x) + Number(y);
}

function subtract(x, y) {
  return Number(x) - Number(y);
}

function multiply(x, y) {
  return Number(x) * Number(y);
}

function divide(x, y) {
  return Number(x) / Number(y);
}

function getNumber(id) {
  digitClicked = document.getElementById(id).dataset.number;
  screen.innerHTML += digitClicked;
  digitsOnScreen = document.getElementById("output").innerHTML;
}

function clearScreen() {
  screen.innerHTML = "";
  firstNumber = 0;
  secondNumber = 0;
  haveSum = false;
  console.log("screen cleared");
}

function assignSymbol(id) {
  firstNumber = digitsOnScreen;
  symbol = document.getElementById(id).dataset.symbol;
  screen.innerHTML = "";
}

function getResult() {
  var sum = 0;
  if(haveSum == true) {
    firstNumber = String(sum);
    secondNumber = 0;
  }
  
  
  secondNumber = digitsOnScreen;

  switch (symbol) {
    case "+":
      sum = add(firstNumber, secondNumber);
      break;
    case "-":
      sum = subtract(firstNumber, secondNumber);
      break;
    case "/":
      sum = divide(firstNumber, secondNumber);
      break;
    case "*":
      sum = multiply(firstNumber, secondNumber);
      break;
  }
  haveSum = true;
  console.log(typeof secondNumber);
  screen.innerHTML = sum;
  // firstNumber = sum;
}
