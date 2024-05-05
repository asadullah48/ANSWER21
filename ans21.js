//Think of something you could store in a TypeScript Object.
//Write a program that creates Objects containing these items.
let book = {
    title: "Arabic Course",
    author: "Dr. V. Abdur Rahim",
    publisher: "Darussalam",
    yearPublished: 1428,
};
console.log(`Book Info: ${book.title} by ${book.author}, published by ${book.publisher}, published in ${book.yearPublished}`);
import inquirer from "inquirer";
const result = await inquirer.prompt([
    { message: "fristNumber", type: "number", name: "fristNumber" },
    { message: "secondNumber", type: "number", name: "secondNumber" },
    {
        message: "select one of the operations",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multipication", "Division", "Percentage"],
    },
]);
if (result.operator === "Addition") {
    let results = result.fristNumber + result.secondNumber;
    console.log(results);
}
;
