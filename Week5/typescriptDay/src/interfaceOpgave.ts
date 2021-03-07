//Link til opgaven (04/03/2021) Typescript første dag 
//https://docs.google.com/document/d/1Lxg0SkcKzBkARM3nzS-82xHZfqgDECJA9blTbIjaJTQ/edit#

//Interface 1
interface IBook{
    title:string
    ,readonly author:string,
    published?:Date,
    pages?:number;
}

class Book implements IBook{
    title:string;
    author:string;
    published:Date;
    pages:number;

    constructor(title:string,author:string,published:Date,pages:number){
        this.title = title;
        this.author = author;
        this.published = published;
        this.pages = pages;
    }
}

let bookInterface:IBook = {title:"Harry",author:"Rowling",published: new Date() ,pages:230}

const testBook = function(book: IBook){
console.log(book.title +" " + book.author + " " + book.pages +" " + book.published)
}
let bookClass = new Book("Harry 2","Roland",new Date(),300);
testBook(bookInterface);
testBook(bookClass)

//Interface 2
interface IMyFunc {
    (first: string, second: string, third: string): string[];
  }

let myFunc: IMyFunc;

myFunc = function (first:string,second:string,third:string) {
    let arr:string[] = [];
    arr.push(first);
    arr.push(second);
    arr.push(third);

    return arr 
}


let myFuncUpper: IMyFunc;

myFuncUpper = function (first:string,second:string,third:string) {
    let arr:string[] = [];
    arr.push(first.toUpperCase());
    arr.push(second.toUpperCase());
    arr.push(third.toUpperCase());

    return arr 
}

let f2 = function logger(f1: IMyFunc){
    let first:string = "hey";
    let second:string = "ho";
    let third:string ="ha"
   
    let [ a, b, c] =  f1(first,second,third);    ;
    console.log(f1(a,b,c));
}

f2(myFuncUpper)
console.log(myFunc("hey","hoy","ha"));
console.log(myFuncUpper("hey","hoy","ha"));


