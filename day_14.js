//Task 1
class Person {
  constructor(firstname, lastname, age) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
  }
  greeting = (msg) => {
    return msg;
  };

  updateAge = (newAge) => {
    this.age = newAge;
    console.log(`Age Before updating: ${newAge}`);
  };

  static genericGreeting() {
    return "Hello! This is a generic greeting.";
  }
}

const person = new Person();
console.log(person.greeting("Hello"));
person.age = 12;
console.log(`Age Before updating: ${person.age}`);

//Task 2
person.updateAge(25);

//Task 3
class Student extends Person {
  static count = 0;
  constructor(studentId) {
    super();
    this.studentId = studentId;
    Student.count++;
  }

  getStudentId = () => {
    return this.studentId;
  };

  greeting = () => {
    return this.studentId;
  };
}

const stud = new Student(189650370);
console.log(stud.getStudentId());

//Task 4
console.log(stud.greeting());
// console.log(person.greeting("Hello"));

//Task 5
const greetingMessage = Person.genericGreeting();
console.log(greetingMessage);

//Task 6
let std1 = new Student(13432423);
let std2 = new Student(13433443);
let std3 = new Student(13433675);
let std4 = new Student(13433697);

console.log(Student.count);

//Task 7
class Person2 {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.firstName.toUpperCase()} ${this.lastName.toUpperCase()}`;
  }

  set fullName(name) {
    this.firstName = name;
    this.lastName = name;
  }
}
const fullNamePerson = new Person2("Aashutosh", "Soni");
console.log(fullNamePerson.fullName);

//Task 8
console.log(fullNamePerson.fullName);

//Task 9
class Account {
  #balance;

  constructor(initialbalance = 0) {
    this.#balance = initialbalance;
  }
  deposit = (amount) => {
    return (this.#balance += amount);
  };

  withdraw = (amount) => {
    return (this.#balance -= amount);
  };

  getBalance() {
    return this.#balance;
  }
}

const myAccount = new Account();
console.log(myAccount.getBalance()); // 0
console.log(myAccount.deposit(120)); // 120
console.log(myAccount.withdraw(20)); // 100
console.log(myAccount.getBalance()); // 100
console.log(myAccount.deposit(50)); // 120
