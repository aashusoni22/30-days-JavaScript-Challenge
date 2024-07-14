//*************Activity 1: Arithmetic Operations*************/

//Task 1
function addNums(n1, n2) {
  console.log(n1 + n2);
}

//Task 2
function subNums(n1, n2) {
  console.log(n1 - n2);
}

//Task 3
function multiply(n1, n2) {
  console.log(n1 * n2);
}

//Task 4
function divide(n1, n2) {
  console.log(n1 / n2);
}

//Task 5
function reaminder(n1, n2) {
  console.log(n1 % n2);
}

//*************Activity 2: Assignment Operaters*************/

//Task 6
let num = 10;
num += 5;
console.log(num);

//Task 7
let num1 = 10;
num1 -= 5;
console.log(num1);

//*************Activity 3: Comparison Operaters*************/

//Task 8
function compareNums(n1, n2) {
  console.log(`${n1 > n2 ? n1 + ": n1 is greater" : n2 + ": n2 is greater"}`);
}
compareNums(10, 20);

//Task 9
function compareTwo(n1, n2) {
  console.log(n1 >= n2);
  console.log(n1 <= n2);
}

//Task 10
function compare(n1, n2) {
  console.log(n1 == n2);
  console.log(n1 === n2);
}

//*************Activity 4: Logical Operaters*************/

//Task 11
function andOperator(username, password) {
  console.log(username.innerText !== "" && password.innerText !== "");
}

//Task 12
function orOperator(email, phone) {
  console.log(email.innerText !== "" || phone.innerText !== "");
}

//Task 13
function notOperator(age) {
  console.log(age !== 0);
}

//*************Activity 5: Ternary Operaters*************/

//Task 14
function ternary(num) {
  let check = num < 0 ? "Negative" : "Positive";
  console.log(check);
}
