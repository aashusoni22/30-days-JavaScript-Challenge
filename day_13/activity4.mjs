//Task 6
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const _ = require("lodash");
const axios = require("axios");

const array = [1];
const newArr = _.concat(array, 2, 3, 4);
console.log(newArr);

//Task 7
axios
  .get("https://jsonplaceholder.typicode.com/users/1")
  .then((response) => {
    console.log(response);
  })
  .catch((err) => console.log(err));
