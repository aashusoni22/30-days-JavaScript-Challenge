//Task 3
export function printHello() {
  console.log("Hello");
}

export function productNum(n1, n2) {
  console.log(n1 * n2);
}

export function divide(n1, n2) {
  try {
    if (n2 === 0) {
      throw new Error("Denominator is zero");
    } else {
      console.log(n1 / n2);
    }
  } catch (error) {
    console.log(error.message);
  }
}

//Task 4
function findMax(n1, n2) {
  console.log(Math.max(n1, n2));
}

export default findMax;
