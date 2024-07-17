//Task 1
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

//Task 2
for (let i = 5; i <= 5; i++) {
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} X ${j} = ${i * j}`);
  }
}

//Task 3
let num = 1;
let sum = 0;
while (num <= 10) {
  sum += num;
  num++;
}
console.log(sum);

// Task 4
let num1 = 10;

while (num1 >= 1) {
  console.log(num1);
  num1--;
}

// Task 5
let n = 1;

do {
  console.log(n);
  n++;
} while (n <= 5);

// Task 6
let n1 = 5;
let fact = 1;
let sum1 = 0;
do {
  sum1 = sum1 + fact;
  fact++;
} while (fact <= n1);
console.log(sum1);

//Task 7
for (let i = 0; i <= 5; i++) {
  let row = "";
  for (let j = 0; j <= i; j++) {
    row += "* ";
  }
  console.log(row);
}

//Task 8
for (let i = 1; i < 11; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}

//Task 9
for (let i = 1; i < 11; i++) {
  if (i === 7) {
    break;
  }
  console.log(i);
}
