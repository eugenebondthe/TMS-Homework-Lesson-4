import { question } from "readline-sync";

//task 1

const firstNameInput: string = question("Enter your first name:\n");
const lastNameInput: string = question("Enter your last name:\n");

console.log(`Hello ${firstNameInput} ${lastNameInput}`);
console.log(
  `Hello ${firstNameInput.toLowerCase()} ${lastNameInput.toUpperCase()}`
);
console.log(
  `Hello ${firstNameInput.toLowerCase()} ${lastNameInput.toLowerCase()}`
);
console.log(
  `Hello ${firstNameInput.toUpperCase()} ${lastNameInput.toUpperCase()}`
);
console.log(
  `Hello ${firstNameInput.toUpperCase()} ${lastNameInput.toLowerCase()}`
);
console.log(
  `Hello ${firstNameInput[0].toUpperCase()}${firstNameInput.slice(1).toLowerCase()} ${
    lastNameInput[0].toUpperCase()
  }${lastNameInput.slice(1).toLowerCase()}`
);

//task 2

const basicStr = "I learn TypeScript";
const subStr = "learn";

let result = basicStr.includes(subStr) ? basicStr.indexOf(subStr) : "No such substring value.";
console.log(result);

//task 3

const inputNum = question("Input requested symbol number:\n");
const chars =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 .";
let newStr = "";
let randomNum = getRandomNum(0, 100);

function getRandomNum(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomStr(strLength: number) {
  while (newStr.length < randomNum) {
    newStr += chars[Math.floor(Math.random() * randomNum)];
  }
  return newStr;
}

getRandomStr(randomNum);

function symPosition(num: number) {
  if (newStr.charAt(num)) {
    console.log(`Symbol placed at position: ${num} is ${newStr.charAt(num)}`);
  } else {
    console.log("You are out of line range!");
  }
}

symPosition(parseInt(inputNum));

//task 4

function endsWithDot(str: string) {
    if (str.endsWith(".")) {
        console.log("This is a complete sentence.");
    } else {
        console.log("This sentence is incomplete!");
    }
}

endsWithDot(newStr);

//task 5

const startStr = "I learn TypeScript";

console.log(startStr.substring(2, 7), startStr.substring(8, 18));
console.log(startStr.slice(2, 7), startStr.slice(8, 18));
console.log(
  startStr.slice(startStr.indexOf("learn"), startStr.indexOf("learn") + 5)
);
console.log(
  startStr.substring(
    startStr.indexOf("TypeScript"),
    startStr.indexOf("TypeScript") + 10
  )
);

//task 6

const tempString = "I learn TypeScript";
const space = " ";

function splitString(stringToSplit: string, separator: string): void {
  const arrayOfStrings = stringToSplit.split(separator);

  console.log('Original string: "' + stringToSplit + '"');
  console.log('Separator: "' + separator + '"');
  console.log(
    "Array includes " +
      arrayOfStrings.length +
      " elements: " +
      arrayOfStrings.join(" / ")
  );
}

splitString(tempString, space);

//task 7

const tempestString = '                я учу typescript!                ';

console.log(tempestString.trim());

//task 8

const tempNum = 8.829734872948;

console.log(tempNum.toFixed(3));

//task 9

function rnd(min: number, max: number) {
    const result = min + Math.random() * (max - min);
    return result % 2 === 0 ? console.log(`The number is: ${result}`) : NaN;
  }

  rnd(2, 666)

//task 10

const rndNum = getRndNum(1, 10);

console.log(`Original number:\n${rndNum}\nTask results:`);

function getRndNum(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

function toFloor(x: number) {
  return console.log(Math.floor(x));
}

function toCeil(x: number) {
  return console.log(Math.ceil(x));
}

function toRound(x: number) {
  return console.log(Math.round(x));
}

toFloor(rndNum);
toCeil(rndNum);
toRound(rndNum);

//task 11

console.log(`Original number:\n${rndNum}\nTask result:`);

function pow(rndNumber: number, dgr: number) {
  return console.log(Math.pow(rndNumber, dgr));
};

pow(rndNum, 5);

//task 12

function getRandNum(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return console.log(`Random number is:\n${Math.floor(Math.random() * (max - min)) + min}`);
  }

getRandNum(1, 10);

//task 13

const rNum = getRndNum(1, 1000);

console.log(`Original number:\n${rNum}`);

function getRNum(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

//task 14

const now: Date = new Date();

const year: any = now.getFullYear();

let month: any = now.getMonth();
month = month < 10 ? "0" + (month + 1) : month + 1;

let day: any = now.getDate();
day = day < 10 ? "0" + day : day;

let hours: any = now.getHours();
hours = hours < 10 ? "0" + hours : hours;

let minutes: any = now.getMinutes();
minutes = minutes < 10 ? "0" + minutes : minutes;

let seconds: any = now.getSeconds();
seconds = seconds < 10 ? "0" + seconds : seconds;

console.log(`Current date: ${month}/${year}/${day}. Current time: ${hours}:${minutes}:${seconds}.`);
