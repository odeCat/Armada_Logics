// Arrays and Objects Assignment
// Task 1: Create and Use an Object

let book = {
    title: "Harry Potter and the Goblet of Fire",
    author: "J. K. Rowling",
    pages: 734,
    isRead: false
};

console.log(book.title);
console.log(book["author"]);
console.log(book.pages);
console.log(book["isRead"]);

book.isRead = true;
book.genre = "Fantasy";
console.log(book);

// Task 2: Create and Modify an Array of Objects

let movies = [
    {title: "The Matrix", director: "Lana & Lilly Wachowski", year: 1999},
    {title: "Interstellar", director: "Christopher Nolan", year: 2014},
    {title: "Godzilla vs. Kong", director: "Adam WIngard", year: 2021}
];

console.log(movies[1].title);

movies.push({title: "Avatar", director: "James Cameron", year: 2009});
movies[0].year = 2023;
console.log(movies);

// Task 3: Combine Objects and Arrays

let student = {name: "Catherine", age: 22, subjects: ["Math", "Science", "History"]};

console.log(student.subjects[0]);

student.subjects.push("English");
console.log(student);

// Task 4: Challenge Task (Optional)

let recipe = {name: "Pasta Salad", 
    ingredients: 
    [{name: "Pasta", quantity: "2 cups", isVegetarian: true},
    {name: "Tomato", quantity: "1 cup", isVegetarian: true},
    {name: "Chicken", quantity: "1/2 cup", isVegetarian: false}]
};

recipe.ingredients.push({name: "Olive Oil", quantity: "2 tbsp", isVegetarian: true});
console.log(recipe.ingredients[1].name);
console.log(recipe);

// Last Updated: [2025-03-05]
// Author: [Catherine Olleres]