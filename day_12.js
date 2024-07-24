//Task 1
function errorCatching() {
  try {
    throw new Error("Error Throwned");
  } catch (error) {
    console.log("Some Error Occured");
  }
}

errorCatching();

//Task 2
function divide(n1, n2) {
  try {
    if (n1 / n2 === Infinity) {
      throw new Error();
    } else {
      console.log(n1 / n2);
    }
  } catch (error) {
    console.log("Denominator is zero");
  }
}

divide(21, 10);

//Task 3
try {
  console.log("I am in try block");
} catch (error) {
  console.log("I am in catch block");
} finally {
  console.log("I am finally block");
}

//Task 4
class error extends Error {}

function errorFunc() {
  try {
    throw new error();
  } catch (error) {
    console.log("Something went wrong: custom error");
  }
}
errorFunc();

//Task 5
function validateString(str) {
  try {
    if (str === "") {
      throw new Error("String is empty");
    } else {
      console.log(str);
    }
  } catch (error) {
    console.log(error.message);
  }
}
validateString("");

//Task 6
const randomPromise = new Promise((resolve, reject) => {
  const randNum = Math.floor(Math.random() * 2);
  if (randNum === 1) {
    resolve("Promise is resolved");
  } else {
    reject("Promise is rejected");
  }
});

randomPromise
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

//Task 7
async function handleError() {
  try {
    const randPromise = await randomPromise;
    console.log(`${randPromise} ASYNC`);
  } catch (error) {
    console.log(`${error} ASYNC`);
  }
}
handleError();

//Task 8
fetch("https://jsonpldaceholder.typicode.com/todos")
  .then((data) => {
    data.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch(() => {
    console.log("Problem fetching data :(");
  });

//Task 9
const fetchPromise = async () => {
  try {
    const response = await fetch("https://jsonpldaceholder.typicode.com/todos");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(`${error} Error fetching data, please check URL`);
  }
};

fetchPromise();
