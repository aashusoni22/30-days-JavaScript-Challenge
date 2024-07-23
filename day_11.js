//Task 1
new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Task 1 Promise Resolved");
    resolve();
  }, 2000);
});

//Task 2
new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Task 1 Promise Resolved");
    reject();
  }, 2000);
}).catch(() => {
  console.log("Error Catched");
});

//Task 3
const seqPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("getting data...");
  }, 3000);
});

seqPromise
  .then((data) => {
    console.log(data);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("fetching data..");
      }, 3000);
    });
  })
  .then((data) => {
    console.log(data);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("here is your data");
      }, 3000);
    });
  })
  .then((data) => {
    console.log(data);
  });

//Task 4
async function fetchData() {
  await setTimeout(() => {
    console.log("data fetching");
  }, 4000);
}

fetchData();

//Task 5
async function rejectedPromise() {
  try {
    const response = await fetch("www.google.com");
  } catch (error) {
    console.log("Promise Rejected Successfully");
  }
}
rejectedPromise();

// Task 6
fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((data) => console.log("Response 1", data))
  .catch((err) => console.log(err));

//Task 7
const fetchApi = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Error happened while fetching");
  }
};

fetchApi();

//Task 8
const promiseOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise One");
  }, 1000);
});
const promiseTwo = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise Two");
  }, 2000);
});
const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise Three");
  }, 3000);
});

Promise.all([promiseOne, promiseTwo, promiseThree])
  .then((values) => {
    console.log(values);
  })
  .catch((error) => {
    console.log("Promises failed");
  });

//Task 9
Promise.race([promiseOne, promiseTwo, promiseThree])
  .then((values) => {
    console.log(values);
  })
  .catch((error) => {
    console.log("Promises failed");
  });
