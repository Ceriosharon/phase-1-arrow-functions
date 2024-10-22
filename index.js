function greet(name) {
  return `Hello, ${name}!`;
}

const farewell = function(name) {
  return `Goodbye, ${name}!`;
};

const add = (a, b) => a + b;

const sum = (a, b) => {
  console.log(`Adding ${a} and ${b}`);
  return a + b;
};

const divide = (a, b) => a / b;

// Correcting the assertion
const result = divide(2000, 100); // Calculate the result first
console.assert(result === 20, `Expected 20 but got ${result}`);

// Removed the misplaced return statement
// return a / b; // This line was incorrect

const square = (x) => x * x;

console.log(greet('Alice'));
console.log(farewell('Bob'));
console.log(add(2, 3));
console.log(sum(1, 2));
console.log(divide(2000, 100));
console.log(square(5));

const nums = [1, 2, 3];
const squares = nums.map(num => num ** 2);
console.log(squares);

const overdueTodoItems = document.querySelectorAll('.todo-item');
const finishedItems = Array.from(overdueTodoItems).map(item => {
  item.className = 'complete';
  return item;
});
console.log(`You finished ${finishedItems.length} items!`);
