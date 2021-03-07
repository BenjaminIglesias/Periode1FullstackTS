"use strict";
//Link til opgaven (04/03/2021) Typescript første dag 
//https://docs.google.com/document/d/1Lxg0SkcKzBkARM3nzS-82xHZfqgDECJA9blTbIjaJTQ/edit#
class Book {
    constructor(title, author, published, pages) {
        this.title = title;
        this.author = author;
        this.published = published;
        this.pages = pages;
    }
}
let bookInterface = { title: "Harry", author: "Rowling", published: new Date(), pages: 230 };
const testBook = function (book) {
    console.log(book.title + " " + book.author + " " + book.pages + " " + book.published);
};
let bookClass = new Book("Harry 2", "Roland", new Date(), 300);
testBook(bookInterface);
testBook(bookClass);
let myFunc;
myFunc = function (first, second, third) {
    let arr = [];
    arr.push(first);
    arr.push(second);
    arr.push(third);
    return arr;
};
let myFuncUpper;
myFuncUpper = function (first, second, third) {
    let arr = [];
    arr.push(first.toUpperCase());
    arr.push(second.toUpperCase());
    arr.push(third.toUpperCase());
    return arr;
};
let f2 = function logger(f1) {
    let first = "hey";
    let second = "ho";
    let third = "ha";
    let [a, b, c] = f1(first, second, third);
    ;
    console.log(f1(a, b, c));
};
f2(myFuncUpper);
console.log(myFunc("hey", "hoy", "ha"));
console.log(myFuncUpper("hey", "hoy", "ha"));
//# sourceMappingURL=interfaceOpgave.js.map