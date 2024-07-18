//Task 1
const arrNums = [1, 2, 3, 4, 5];
console.log(arrNums);

//Task 2
const firstEle = arrNums[0];
const lastEle = arrNums[arrNums.length - 1];
console.log(firstEle);
console.log(lastEle);

//Task 3
arrNums.push(6);
console.log(arrNums);

//Task 4
arrNums.pop();
console.log(arrNums);

//Task 5
arrNums.shift();
console.log(arrNums);

//Task 6
arrNums.unshift(11);
console.log(arrNums);

//Task 7
const newArr = arrNums.map((num) => num + num);
console.log(newArr);

//Task 8
const filteredArr = arrNums.filter((num) => num % 2 === 0);
console.log(filteredArr);

//Task 9
const sumOfArr = arrNums.reduce((acc, curr) => acc + curr, 0);
console.log(sumOfArr);

//Task 10
for (let i = 0; i < arrNums.length; i++) {
  console.log(arrNums[i]);
}

//Task 11
arrNums.forEach((num) => {
  console.log(num);
});

//Task 12
let twoDimen = [
  [1, 2],
  [3, 4],
];
console.log(twoDimen);

//Task 13
console.log(twoDimen[0][1]);
