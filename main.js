//variables and data types

let fullName = "Clyde Lincoln";
const age = 22;
var enrolled = true;

console.log(fullName, typeof fullName);
console.log(age, typeof age);
console.log(enrolled, typeof enrolled);

//operators and type coercion

const numericString = "5";
const number = 10;

console.log(numericString + number); // "510"
console.log(numericString * number); // 50

//if else
const buyerAge = 20;

if (buyerAge < 5) {
    console.log("Free Entry");
} else if (buyerAge >= 5 && buyerAge <= 17) {
    console.log("Child Discount");
} else if (buyerAge >= 18 && buyerAge <= 64) {
    console.log("Full Price");
} else {
    console.log("Senior Discount");
}

//ternary operator
const accountBalance = -50;

const accountStatus =
    accountBalance < 0 ? "Account Overdrawn" : "Account Active";

console.log(accountStatus);

//switch statement
const score = 84;
let grade;

switch (true) {
    case score >= 90:
        grade = "A";
        break;
    case score >= 80:
        grade = "B";
        break;
    case score >= 70:
        grade = "C";
        break;
    case score >= 60:
        grade = "D";
        break;
    default:
        grade = "F";
}

console.log("Final Grade:", grade);
