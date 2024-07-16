//Task 1
function checkNumber(num) {
  if (num === 0) {
    console.log(`Number is ${num}`);
  } else if (num < 0) {
    console.log(`Number is Negative`);
  } else {
    console.log("Number is Positive");
  }
}

//Task 2
function ageCheck(age) {
  if (age >= 18) {
    console.log("Eligible to vote");
  } else {
    console.log("Ineligible to vote");
  }
}

// Task 3
let n1 = 10;
let n2 = 50;
let n3 = 12;

if (n1 > n2) {
  if (n1 > n3) {
    console.log("n1 is largest");
  } else {
    console.log("n3 is largest");
  }
} else if (n2 > n3) {
  console.log("n2 is larger");
} else {
  console.log("n3 is larger");
}

//Task 4
let day = 3;

switch (day) {
  case 1:
    console.log("Sunday");
    break;
  case 2:
    console.log("Monday");
    break;
  case 3:
    console.log("Tuesday");
    break;
  case 4:
    console.log("Wednesday");
    break;
  case 5:
    console.log("Thurday");
    break;
  case 6:
    console.log("Friday");
    break;
  case 7:
    console.log("Saturday");
    break;
  default:
    console.log("Best day");
}

//Task 5
let score = 99;

switch (true) {
  case score < 25:
    console.log("F");
    break;
  case score >= 25 && score <= 40:
    console.log("D");
    break;
  case score > 40 && score <= 65:
    console.log("C");
    break;
  case score > 65 && score <= 80:
    console.log("B");
    break;
  case score > 80:
    console.log("A");
    break;
  default:
    console.log("We need to talk");
}

//Task 6
let n = 11;

const check = n % 2 === 0 ? "Even" : "Odd";
console.log(check);

//Task 7
let year = 1900;
if (year % 400 == 0) {
  console.log(`${year} is leap year.`);
} else if (year % 4 == 0 && year % 100 !== 0) {
  console.log(`${year} is leap year.`);
} else {
  console.log(`${year} is not a leap year.`);
}
