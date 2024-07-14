//*************Activity 1: Variable Declaration*************/

//Task 1
var num = 10;
console.log(num); //10

//Task 2
let str = "JavaScript";
console.log(str); //JavaScript

//*************Activity 2: Constant Declaration*************/

//Task 3
const bool = true;
console.log(bool); //true

//*****************Activity 3: Data Types******************/

//Task 4
let num1 = 15;
let str1 = "Chai";
let bool1 = true;
let obj = {};
let arr = [];

console.log(typeof num1); //number
console.log(typeof str1); //string
console.log(typeof bool1); //boolean
console.log(typeof obj); //object
console.log(typeof arr); //object

//************Activity 4: Reassigning Variables*************/

//Task 5
let chai = "chaiaurcode";
chai = "JsChallenge";

console.log(chai); //JsChallenge

//************Activity 5: Understanding const**************/

//Task 6
const code = "chaiaurcode";
code = "JsChallenge"; //TypeError: Assignment to constant variable

//*******************FEATURE REQUEST*********************/
let num2 = 15;
let str2 = "Chai";
let bool2 = true;
let obj1 = { name: "ChaiAurCode", helpful: true };
let arr1 = [1, 2, 4, 5];

console.log(`${num2} : ${typeof num2}`);
console.log(`${str2} : ${typeof str2}`);
console.log(`${bool2} : ${typeof bool2}`);
console.log(`${obj1} : ${typeof obj1}`);
console.log(`${arr1} : ${typeof arr1}`);
