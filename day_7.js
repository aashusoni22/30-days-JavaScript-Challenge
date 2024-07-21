//Task 1
const book = {
  title: "The coder",
  author: "Chai aur code",
  year: 2021,
};
console.log(book);

//Task 2
console.log(`title: ${book.title}\nauthor: ${book.author}`);

//Task 3
book.print = function () {
  console.log(`${this.title} ${this.author}`);
};
console.log(book.print());

//Task 4
book.changeYear = function (year) {
  this.year = year;
};
book.changeYear(2000);
console.log(book);

//Task 5
const library = {
  name: "Chai",
  books: [
    {
      title: "The coder",
      author: "Chai aur code",
      year: 2021,
    },
    {
      title: "The Alchemist",
      author: "Paulo",
      year: 2000,
    },
    {
      title: "The Truth To Be Told",
      author: "Om Swami",
      year: 2005,
    },
  ],
};
console.log(library);

//Task 6
console.log(library.name);

const titles = library.books;

for (const t of titles) {
  console.log(t.title);
}

//Task 7
book.thisReturn = function () {
  return `${this.title}, ${this.year}`;
};

console.log(book.thisReturn());

//Task 8
for (const key in book) {
  console.log(`${key} : ${book[key]}`);
}

//Task 9
console.log(Object.keys(book));
console.log(Object.values(book));
