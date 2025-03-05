// Task 1: Calculate the Total Cost of Items

let item1 = 20;
let item2 = 10;
let item3 = 30;
let totalCost = item1 + item2 + item3;
console.log('The total cost of the items is: ₱' + totalCost);

// Task 2: Calculate the Average of Three Numbers

let num1 = 6;
let num2 = 11;
let num3 = 9;
let average = ((num1 + num2 + num3) / 3).toFixed(2);
console.log('The average is: ' + average);

// Task 3: Odd or Even Checker

let number = 13;
let result = number % 2 === 0 ? 'even' : 'odd';
console.log(number + ' is an ' + result + ' number.');

// Task 4: Calculate Discounts

let originalPrice = 100;
let discountPercentage = 20;
let discountAmount = (originalPrice * discountPercentage) / 100;
let discountedPrice = originalPrice - discountAmount;
console.log('The discounted price is: ₱' + discountedPrice);

// Bonus Task (Optional): Reverse Percentage Calculation

let finalPrice = 80;
let discountedPercentage = 20;
let originalPriceBeforeDiscount = finalPrice / (1 - discountedPercentage / 100);
console.log('The original price before the discount was: ₱' + originalPriceBeforeDiscount);