//boolean 
let flag: boolean = true;
console.log("Value assigned to flag is: " +flag);

//Number
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
console.log("Value Decimal is: " +decimal);
console.log("Value Hex is: " +hex);
console.log("Value Binary is: " +binary);
console.log("Value Octal is: " +octal);

//String
let myString:string = "Hello";
console.log(myString);

//array
let list: Array<number> = [1, 2, 3];
console.log("Array is: " +list);

//any
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false;
console.log(notSure);
