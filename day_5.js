//Task 1
function checkOddEven(num) {
  const check = num % 2 === 0 ? "Even" : "Odd";
  console.log(check);
}
checkOddEven(5);

//Task 2
function square(num) {
  return num * num;
}
square(2);

//Task 3
const maxNum = function (num1, num2) {
  console.log(Math.max(num1, num2));
};
maxNum(1, 2);

// Task 4
const concatStr = function (str1, str2) {
  return str1.concat(str2);
};
console.log(concatStr("Chai", "Code"));

//Task 5
const sumOfNums = (n1, n2) => {
  return n1 + n2;
};
console.log(sumOfNums(4, 5));

//Task 6
const checkStr = (str, char) => {
  return str.includes(char);
};
console.log(checkStr("Chai", "t"));

//Task 7
function product(n1, n2 = 5) {
  return n1 * n2;
}
console.log(product(2));

//Task 8
function greeting(name, age = 17) {
  return `Welcome ${name} Your age is ${age}`;
}
console.log(greeting("Batman"));

//Task 9
function higherOrder(func, times) {
  for (let i = 1; i <= times; i++) {
    func();
  }
}

function greet() {
  console.log("Hello Coders");
}

higherOrder(greet, 2);

//Task 10
function anotherHigherOrder(func1, func2, value) {
  let result1 = func1(value);
  let result2 = func2(result1);
  console.log(result2);
}

const add = (n1) => n1 + n1;
const squareNum = (n1) => n1 * n1;

anotherHigherOrder(add, squareNum, 2);
