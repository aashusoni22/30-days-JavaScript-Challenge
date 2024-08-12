//Task 1
function indice(arr, target) {
  let pairs = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        console.log(`${arr[i]}, ${arr[j]}`);
        pairs.push([arr[i], arr[j]]); // Add the pair of indices to the pairs array
      }
    }
  }
  if (pairs.length === 0) {
    console.log("No pairs found");
    return null; // Return null if no pairs are found
  }
  return pairs; // Return all pairs found
}

console.log(indice([1, 2, 2, 3], 4));

//Task 2
const reverse = function (num) {
  const absoluteNum = Math.abs(num);
  const reversedStr = absoluteNum.toString().split("").reverse().join("");
  const converted = Number(reversedStr) * Math.sign(num);
  return converted;
};

console.log(reverse(34)); // 43
console.log(reverse(-123)); // -321
console.log(reverse(120)); // 21
console.log(reverse(0)); // 0
console.log(reverse(-400)); // -4

//Task 3
const palindrome = (num) => {
  const original = num;
  const convert = num.toString().split("").reverse().join("");
  const convertedNum = Number(convert);
  if (convertedNum === original) {
    return true;
  } else {
    return false;
  }
};

console.log(palindrome(101));
console.log(palindrome(10));
console.log(palindrome(-121));
console.log(palindrome(1));

//without converting to string
const isPalindrome = (num) => {
  const original = num;
  let reversed = 0;

  while (num > 0) {
    const digit = num % 10;
    console.log(`digit: ${digit}`);
    reversed = reversed * 10 + digit;
    console.log(`reversed: ${reversed}`);
    num = Math.floor(num / 10);
  }

  return original === reversed;
};

console.log(isPalindrome(101));
console.log(isPalindrome(102));
console.log(isPalindrome(-121));
console.log(isPalindrome(1));

//Task 4
function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}

function mergeTwoLists(l1, l2) {
  // Create a dummy node to act as the head of the merged list
  const dummy = new ListNode(-1);
  let current = dummy;

  // Traverse both lists
  while (l1 !== null && l2 !== null) {
    // Compare the values of the nodes
    if (l1.val < l2.val) {
      current.next = l1;
      l1 = l1.next; // Move pointer in the first list
    } else {
      current.next = l2;
      l2 = l2.next; // Move pointer in the second list
    }
    current = current.next; // Move the pointer in the merged list
  }

  // If one of the lists is exhausted, link the remaining nodes of the other list
  if (l1 !== null) {
    current.next = l1;
  } else if (l2 !== null) {
    current.next = l2;
  }

  // Return the head of the merged list (skip the dummy node)
  return dummy.next;
}

// Example usage:
// Create two sorted linked lists
const l1 = new ListNode(1, new ListNode(3, new ListNode(5)));
const l2 = new ListNode(2, new ListNode(4, new ListNode(6)));

// Merge the lists
const mergedList = mergeTwoLists(l1, l2);

// Function to print the merged list
function printList(node) {
  let current = node;
  while (current !== null) {
    console.log(current.val);
    current = current.next;
  }
}

// Print the merged list
printList(mergedList);
