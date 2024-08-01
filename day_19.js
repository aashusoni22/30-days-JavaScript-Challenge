//Task 1
const str =
  "This is 8 JavaScript 7 Questions. 12 JavaScript 6 has prototypal behaviour";
const result = str.match(/JavaScript/g);
console.log(result);

//Task 2
const numbers = str.match(/[0-9]/g);
console.log(numbers);

//Task 3
const upperCase = str.match(/\b[A-Z][a-z]*\b/g);
console.log(upperCase);

//Task 4
const number = str.match(/\d+/g);
console.log(number);

//Task 5
const phoneNumber = "(700) 535-4533";
const areaCode = phoneNumber.match(/\(\d+\)/g);
const officeCode = phoneNumber.match(/\d+(?=-)/g);
const line = phoneNumber.match(/(?<=-\d*)\d+/g);
console.log(areaCode);
console.log(officeCode);
console.log(line);

//TASK 6
const email = "chaicode@email.com";
const username = email.match(/\w+(?=@)/g);
const domain = email.match(/(?<=@)\w+\.\w+/g);
console.log(username);
console.log(domain);

//Task 7
const str1 = "Hello world";
const matchFirst = str1.match(/^\w+/g);
console.log(matchFirst ? matchFirst[0] : "No match found");

//Task 8
const str2 = "The quick brown fox jumps over the lazy dog";
const specificWord = "dog";
const match = str2.match(new RegExp(`${specificWord}$`));
console.log(match ? match[0] : "No match found");

//Task 9
const pwd = "Strong1Pass$";
const check =
  /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+\[\]{}|;:',.<>?/\-])/g;
const matches = check.test(pwd);
if (matches) {
  console.log("Valid");
} else {
  console.log("Invalid");
}

//Task 10
const url = "https://example.com:8080/path/to/resource?query=example#section";
const urlRegex =
  /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,6}(:\d{1,5})?(\/[a-zA-Z0-9\-._~:/?#@!$&'()*+,;=]*)?(\?[a-zA-Z0-9\-._~:/?#@!$&'()*+,;=]*)?(#[a-zA-Z0-9\-._~:/?#@!$&'()*+,;=]*)?$/;

const isValid = urlRegex.test(url);
console.log(isValid);
