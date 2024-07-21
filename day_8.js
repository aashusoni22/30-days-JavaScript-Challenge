//Task 1
let name = "Dolly";
let age = 27;

console.log(`${name} is ${age} years old`);

//Task 2
console.log(`This is the 
multiline string
using template literal`);

//Task 3
const numArr = [10, 20, 30, 40, 50];

[a, b] = numArr;
console.log(a);
console.log(b);

//Task 4
const book = {
  title: "The truth to be told",
  author: "Om Swami",
  year: 2005,
};

let { title, author } = book;
console.log(title);
console.log(author);

//Task 5
const newArr = [...numArr, 60, 70];
console.log(newArr);

//Task 6
function sum(...nums) {
  let total = 0;
  for (num of nums) {
    total += num;
  }
  return total;
}

console.log(sum(1, 2, 4));

//Task 7
function product(n1, n2 = 1) {
  return n1 * n2;
}

console.log(product(5, 5));
console.log(product(5));

//Task 8
const username = "aashusoni18";
const user = {
  username,
  age: 23,
  isLoggedIn: true,
  newUser: function () {
    console.log("New User");
  },
};

console.log(user);

//Task 9
const compName = "Name";
const compAge = "Age";
const compGender = "Gender";

const obj = {
  [compName]: "Aashu",
  [compAge]: 23,
  [compGender]: "Male",
};

console.log(obj);
