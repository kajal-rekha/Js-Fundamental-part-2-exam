"use strict";

/*const birthYearNitu = 1997;
const birthYearRitu = 1995;

Calculate their ages corresponding to the recent year and compare these to determine that who is older or younger.
*/
//solution............

const birthYearNitu = 1997;
const birthYearRitu = 1995;
const nituAge = birthYearNitu - 2022;
const rituAge = birthYearRitu - 2022;
const ageCalculate =
  nituAge < rituAge
    ? console.log("nitu is older")
    : console.log("ritu is older");

// ============***********************************==============

/*
 const arr = [11, 27, 31, 45, 52, 61, 77, 84];

Create a function expression and return the total sum of all elements inside the "arr", but use a while loop instead.
*/

//solution.............

const arr = [11, 27, 31, 45, 52, 61, 77, 84];
let totalArreyNumber = 0;
const calculateTotalNumberInArrey = function (arr) {
  let i = 0;
  while (i < arr.length) {
    totalArreyNumber += arr[i];
    i++;
  }
  return totalArreyNumber;
};
const sumAllElementsInArrey = `All elements are calculated: ${calculateTotalNumberInArrey(
  arr
)}`;
console.log(sumAllElementsInArrey);

// ==========************************==========

/*
 const tumpaArray = [
  "Tumpa",
  "Rahman",
  2022 - 1996,
  "programmer",
  ["Sumaiya", "Nimmi", "Riyad"],
  true,
];

Perform these two tasks below:
a) Loop through the array and return all
elements from it, but loop it in backwards.

b) Print the statement dynamically 
same as below using
template literals:

"Tumpa is 26, and she is a programmer. 
She has 3 friends, and Nimmi is her
best friend."
*/

//solution.............
//a no answer.....
const tumpaArray = [
  "Tumpa",
  "Rahman",
  2022 - 1996,
  "programmer",
  ["Sumaiya", "Nimmi", "Riyad"],
  true,
];
for (let i = tumpaArray.length - 1; i >= 0; i--) {
  const reversArey = tumpaArray[i];
  console.log(reversArey);
}

//b no answer.....
console.log(
  `${tumpaArray[0]} is ${tumpaArray[2]}, and she is a ${tumpaArray[3]}. She has ${tumpaArray[4].length} friends, and ${tumpaArray[4][1]} is her best friend.`
);

//  ========********************************************=========

//  Declare an object for a student including his/her "fullName" and "birthYear" property. Now create a method in the object to calculate the age using "this" keyword. Finally call that method and return the calculated age.

// solution .......
const student = {
  firstName: "Sultana Rajia",
  birthYear: 1993,

  calcAge: function () {
    return 2022 - this.birthYear;
  },
};

console.log(student.calcAge());

// ==========*****************************===========

//Find the all odd numbers between 1 to 100 using a for loop.
// solution..........
let oddNumbers = [];
for (let i = 1; i < 100; i += 2) {
  oddNumbers.push(i);
}
console.log(oddNumbers);

// ===========*********************************============

/*
const years = [1991, 1994, 1995, 1996, 1998];

Duplicate this array into a new array only including the even years using the for loop and continue statement.
*/
// solution..........
const years = [1991, 1994, 1995, 1996, 1998];
const evenYears = [];
for (let i = 0; i < years.length; i++) {
  if (years[i] % 2 === 1) {
    continue;
  } else {
    evenYears.push(years[i]);
  }
}
console.log(evenYears);

// =========************************===========

/*
 const arr1 = [23, 24, 32, 28, 26, 36, 21, 25];
const arr2 = [88, 86, 96, 75];

Loop through the "arr1" and add all elements into the beginning of the "arr2".
 */
//answer........
const arr1 = [23, 24, 32, 28, 26, 36, 21, 25];
const arr2 = [88, 86, 96, 75];

for (let i = 0; i < arr1.length; i++) {
  arr2.unshift(arr1[i]);
}
console.log(arr2);

// ===========*********************==============

// Write an arrow function to check if a year is leap or not.
// answer.......
const isLeapYear = (year) => {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    const result = year + "is a leap year";
    return result;
  } else {
    const result = year + "is not a leap year";
    return result;
  }
};
console.log(isLeapYear(2000));
//=========*********************==========

//  Create a function to return the every odd numbers in the range of 20 to 30. Then pass these odd numbers as the lambda arguments by creating a currying function and return their total sum at the end of the function's block or the last degree of lambda expression.
// solution.........
//first way.........
function odd(arr) {
  let oddArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      oddArray.push(arr[i]);
    }
  }
  return oddArray;
}
const range = [20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
const odds = odd(range);
function oddSum(a) {
  return function (b) {
    return function (c) {
      return function (d) {
        return function (e) {
          return a + b + c + d + e;
        };
      };
    };
  };
}
console.log(oddSum(odds[0])(odds[1])(odds[2])(odds[3])(odds[4]));

// second way..........

// const oddArray = [21, 23, 25, 27, 29];
// const oddSum = (a) => (b) => (c) => (d) => (e) => a + b + c + d + e;
// console.log(
//   oddSum(oddArray[0])(oddArray[1])(oddArray[2])(oddArray[3])(oddArray[4])
// );

// ==============*************************************================
// Write two functions as the name suggest "logCutter" and "furnitureMaker". Use your own imagination to create a callback function while "furnitureMaker" takes "log" as a number argument.

// solution.....
function logCutter(tree) {
  return tree * 10;
}

function furnitureMaker(table, chair) {
  const tableWood = logCutter(0.5);
  const chairWood = logCutter(0.8);
  const totalWood = tableWood + chairWood;
  return `${table} pieces of table and ${chair} pieces chairs made of ${totalWood} ply wood sheet`;
}
console.log(furnitureMaker(10, 20));
