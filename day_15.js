//Task 1
function outer() {
  let price = 10;
  function inner() {
    console.log(price);
  }
  inner();
}

outer();

//Task 2
function createCounter() {
  let counter = 0;

  return {
    increment: () => {
      counter++;
      console.log(`Counter incremented to ${counter}`);
    },
    getValue: () => {
      console.log(`Current counter value: ${counter}`);
      return counter;
    },
  };
}

const myCounter = createCounter();
myCounter.increment();
myCounter.increment();
console.log(myCounter.getValue());

//Task 3
const generateId = () => {
  let counter = 0;

  return () => {
    const uniqueId = Math.round(Math.random() * 100000000);
    counter += 1;
    return uniqueId;
  };
};

const studentId = generateId();
console.log(studentId());

//Task 4
const greetUser = (username) => {
  return function greet() {
    return `Hello ${username}`;
  };
};

const user = greetUser("Aashutosh");
console.log(user());

// Task 5
const createFunctionArray = () => {
  let functions = []; // Step 1: Create an empty array

  for (let i = 0; i < 10; i++) {
    // Step 2: Loop to create 10 functions
    functions.push(
      (function (index) {
        // Step 3: Use an IIFE to capture the current value of i
        return function () {
          // This is the actual function that will be added to the array
          console.log(index); // This function logs the captured value of i (index)
        };
      })(i)
    ); // Immediately invoke the function with the current value of i
  }

  return functions; // Return the array of functions
};

// Example usage
const functionArray = createFunctionArray();
functionArray[0](); // Logs: 0
functionArray[1](); // Logs: 1
functionArray[2](); // Logs: 2

//Task 6
function createItemManager() {
  let items = [];

  return {
    addItem: function (item) {
      items.push(item);
      console.log(`Added: ${item}`);
    },

    removeItem: function (item) {
      const index = items.indexOf(item);
      if (index !== -1) {
        items.splice(index, 1);
        console.log(`Removed: ${item}`);
      }
    },
    listItems: function () {
      console.log("Items in the collection");
      items.forEach((item, index) => {
        console.log(`${index + 1}. ${item}`);
      });
    },
  };
}

const myItemManager = createItemManager();

myItemManager.addItem("Apple");
myItemManager.addItem("Banana");
myItemManager.listItems();
myItemManager.removeItem("Banana");
myItemManager.listItems();
