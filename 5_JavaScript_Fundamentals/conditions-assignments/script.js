// Task 1: Grading System
let score = 85;
let grade;

if (score >= 90){
    grade = 'A'
} else if (score >= 80){
    grade = 'B'
} else if (score >= 70){
    grade = 'C'
} else if (score >= 60){
    grade = "D"
} else {
    grade = 'F'
}

console.log("Grade: " + grade);

// Task 2: Weather Advisor

let temperature = 20;

if (temperature < 0){
    console.log("It's freezing outside! Bundle up!");
} else if (temperature <= 15){
    console.log("It's cold outside. Wear a jacket.");
} else if (temperature <= 30){
    console.log("The weather is nice. Enjoy your day!");
} else {
    console.log("It's hot outside. Stay hydrated!");
}

// Task 3: Eligibility Checker

let age = 16;

if (age < 13){
    console.log("You are too yougn for this activity.");
} else if (age <= 17){
    console.log("You need parental pemission.");
} else {
    console.log("You are eligible for this activity.");
}

// Task 4: Ticket Price Calculator

age = 22;
let isMember = true;
let ticketPrice;

if (age < 12){
    ticketPrice = "Free";
} else if (isMember){
    ticketPrice = "$10";
} else {
    ticketPrice = "$15";
}

console.log("Ticket price: " + ticketPrice);

// Last Updated: [2025-03-06]
// Author: [Catherine Olleres]