//add

function add(x, y) {
  return x + y;
}

//substract

function subtract(x, y) {
  return x - y;
}

//multiply

function multiply(x, y) {
  return x * y;
}

//divide
function divide(x, y) {
  return x / y;
}

//operate

function operate(operator, x, y) {
  return operator(x, y);
}

//operator

let result = 0;
let entries = [];
let operator;
let display = document.getElementById("display");
let firstEntry;
let secondEntry;
let counter = 0;

//clicking operators places corresponding function into placeholder

document.getElementById("divide").addEventListener("click", function (event) {
  console.log(operator);
  if (counter == 0) {
    firstEntry = Number(display.innerHTML);
    console.log(firstEntry);
    entries = [];
  } else {
    secondEntry = Number(display.innerHTML);
    switch (operator) {
      case "+":
        display.innerHTML = Number(add(firstEntry, secondEntry));
        break;

      case "-":
        display.innerHTML = Number(subtract(firstEntry, secondEntry));
        break;

      case "*":
        display.innerHTML = Number(multiply(firstEntry, secondEntry));
        break;

      case "/":
        display.innerHTML = Number(divide(firstEntry, secondEntry));
        break;
      default:
        break;
    }
    firstEntry = Number(display.innerHTML);
    entries = [];
  }
  operator = "/";
  counter++;
});

document.getElementById("multiply").addEventListener("click", function (event) {
  console.log(operator);
  if (counter == 0) {
    firstEntry = Number(display.innerHTML);
    console.log(firstEntry);
    entries = [];
  } else {
    secondEntry = Number(display.innerHTML);
    switch (operator) {
      case "+":
        display.innerHTML = Number(add(firstEntry, secondEntry));
        break;

      case "-":
        display.innerHTML = Number(subtract(firstEntry, secondEntry));
        break;

      case "*":
        display.innerHTML = Number(multiply(firstEntry, secondEntry));
        break;

      case "/":
        display.innerHTML = Number(divide(firstEntry, secondEntry));
        break;
      default:
        break;
    }
    firstEntry = Number(display.innerHTML);
    entries = [];
  }
  operator = "*";
  counter++;
});

document.getElementById("subtract").addEventListener("click", function (event) {
  console.log(operator);
  if (counter == 0) {
    firstEntry = Number(display.innerHTML);
    console.log(firstEntry);
    entries = [];
  } else {
    secondEntry = Number(display.innerHTML);
    switch (operator) {
      case "+":
        display.innerHTML = Number(add(firstEntry, secondEntry));
        break;

      case "-":
        display.innerHTML = Number(subtract(firstEntry, secondEntry));
        break;

      case "*":
        display.innerHTML = Number(multiply(firstEntry, secondEntry));
        break;

      case "/":
        display.innerHTML = Number(divide(firstEntry, secondEntry));
        break;
      default:
        break;
    }
    firstEntry = Number(display.innerHTML);
    entries = [];
  }
  operator = "-";
  counter++;
});

document.getElementById("add").addEventListener("click", function (event) {
  console.log(operator);
  if (counter == 0) {
    firstEntry = Number(display.innerHTML);
    console.log(firstEntry);
    entries = [];
  } else {
    secondEntry = Number(display.innerHTML);
    switch (operator) {
      case "+":
        display.innerHTML = Number(add(firstEntry, secondEntry));
        break;

      case "-":
        display.innerHTML = Number(subtract(firstEntry, secondEntry));
        break;

      case "*":
        display.innerHTML = Number(multiply(firstEntry, secondEntry));
        break;

      case "/":
        display.innerHTML = Number(divide(firstEntry, secondEntry));
        break;
      default:
        break;
    }
    firstEntry = Number(display.innerHTML);
    entries = [];
  }
  operator = "+";
  counter++;
});

//Clicking digits puts value into array, then into display
let digits = document.querySelectorAll(".digit-key");
console.log(digits);

digits.forEach((digit) => {
  digit.addEventListener("click", function (event) {
    if (event.target.value == 0 && display.innerHTML == "0") {
    } else {
      let entry = event.target.value;
      entry = Number(entry);
      entries.push(entry);
      console.log(entries);
      display.innerHTML = entries.join("");
    }
  });
});

//All Clear

document.getElementById("allClear").addEventListener("click", function (event) {
  display.innerHTML = 0;
  firstEntry = 0;
  entries = [];
  secondEntry = 0;
  counter = 0;
});

//Equal

document.getElementById("equals").addEventListener("click", function (event) {
  secondEntry = Number(display.innerHTML);
  switch (operator) {
    case "+":
      console.log(
        `The second entry is ${secondEntry} and the first is ${firstEntry}`
      );
      display.innerHTML = Number(add(firstEntry, secondEntry));
      entries = [];
      counter = 0;

      break;

    case "-":
      console.log(
        `The second entry is ${secondEntry} and the first is ${firstEntry}`
      );
      display.innerHTML = Number(subtract(firstEntry, secondEntry));
      entries = [];
      counter = 0;

      break;

    case "*":
      console.log(
        `The second entry is ${secondEntry} and the first is ${firstEntry}`
      );
      display.innerHTML = Number(multiply(firstEntry, secondEntry));
      entries = [];
      counter = 0;

      break;

    case "/":
      console.log(
        `The second entry is ${secondEntry} and the first is ${firstEntry}`
      );
      display.innerHTML = Number(divide(firstEntry, secondEntry));
      entries = [];
      counter = 0;

      break;
    default:
      break;
  }
});
