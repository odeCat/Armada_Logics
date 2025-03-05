// 1. Multiplication Table Generator
let num = 5;

// Runs from 1 to 10 to generate the multiplication table
for (let i = 1; i <= 10; i++){
    console.log(`${num} x ${i} = ${num * i}`);
}

// 2. Sum of First N Natural Numbers
let n = 5;
let sum = 0;

// Runs from 1 to n,, adding the number to the sum
for (let i = 1; i <=n; i++){
    sum += i;
}

console.log("The sum of the first " + n + "numbers is: " + sum);

// 3. Array Elements Printer
let numArray = [2, 4, 6, 8, 10];

// Iterates though each index of the array 
for (let i = 0; i < numArray.length; i++){
    console.log("Array Element: " + numArray[i]);
}

// 4. Pattern Printer
let rows = 5;

// Controls the number of rows
for (let i = 1; i <= rows; i++){
    let pattern = "";
    
    // adds the "*" pattern to the current row
    for (let j = 1; j <= i; j++){
        pattern += "*";
    }

    console.log(pattern);
}

// 5. Reverse Array Elements
let reverseArray = [1, 3, 5, 7, 9];

// Starts from last index to the first
for (let i = reverseArray.length - 1; i >= 0; i--){
    console.log("Reversed Elements: " + reverseArray[i]);
}

// Last Updated: [2025-03-06]
// Author: [Catherine Olleres]


// OTHERS
function calculateSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  }
  
  let numbers = [1, 2, 3, 4];
  console.log("Sum:", calculateSum(numbers));