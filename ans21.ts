//Think of something you could store in a TypeScript Object.
//Write a program that creates Objects containing these items.
let book: {
  title: string;
  author: string;
  publisher: string;
  yearPublished: number;
} = {
  title: "Arabic Course",
  author: "Dr. V. Abdur Rahim",
  publisher: "Darussalam",
  yearPublished: 1428,
};
console.log(
  `Book Info: ${book.title} by ${book.author}, published by ${book.publisher}, published in ${book.yearPublished}`
);
