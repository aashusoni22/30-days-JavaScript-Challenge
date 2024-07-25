//Task 1
const addNum = (n1, n2) => {
  console.log(n1 + n2);
};

//Task 2
const person = {
  name: "aashu",
  age: 23,
  coder: true,
  printName: () => {
    console.log(this.name);
  },
};

export { addNum, person };
