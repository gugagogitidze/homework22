// 1.

let numbers = [14, 30, 20, 18, 66];

numbers.forEach(function (number, index) {
  console.log(number * number);
});

//  2.

let fruits = ["orange", "banana", "strawberry", "apple"];

fruits.forEach(function (furit) {
  console.log(furit);
});

//  3.

let sum = 0;
let num = [14, 4, 7, 22];
num.forEach(function (num) {
  sum += num;
});

console.log(sum);

//  4.

let students = ["guga", "gio", "valeri", "lasha"];

students.forEach(function (student, index) {
  console.log(`students ${student} is in place ${index + 1}`);
});

//  5.

let num1 = [6, 12, 19, 2, 7, 9, 3];

num1.forEach(function (num1, index) {
  if (num % 2 === 0) {
    console.log(num1);
  }
});

//  6.

let num2 = [5, 6, 7, 8];

let squaredNum2 = num2.map(function (num2) {
  return num2 * num2;
});

console.log(squaredNum2);

//  7.
let names = ["nika", "avto", "ani", "mari"];

let lowerCaseNames = names.map(function (name) {
  return name.toLowerCase();
});

console.log(lowerCaseNames);

//  8.

let num3 = [10, 16, 20, 19];

let newNumbers = num3.map(function (num3) {
  return num3 + 10;
});

console.log(newNumbers);

//  9.
let studentss = [
  { name: "tazo", score: 12 },
  { name: "gugs", score: 4 },
  { name: "teo", score: 2 },
  { name: "ano", score: 14 },
];

let studentNames = studentss.map(function (studentss) {
  return studentss.name;
});

console.log(studentNames);

//  10.

let num4 = [29, 4, 44, 6, 8];

let evenNumbers = num4.map(function (num) {
  if (num % 2 === 0) {
    return num * 2;
  } else {
    return num;
  }
});

console.log(evenNumbers);

//  11.
let num5 = [3, 4, 2, 12, 24];

let evenNumber = num5.filter(function (num5) {
  return num5 % 2 === 0;
});

console.log(evenNumber);

//  12.

let name1 = ["olegi", "nodo", "gigi", "andria"];

let longNames = name1.filter(function (name1) {
  if (name1.length >= 5) {
    return true;
  }
});

console.log(longNames);

//  13.
let num6 = [13, -21, -32, 42];

let positiveNumbers = num6.filter(function (num6) {
  if (num6 > 0) {
    return true;
  }
});

console.log(positiveNumbers);
//  14.

let vegetables = [
  { name: "cucumber", price: 112 },
  { name: "potato", price: 11 },
  { name: "banana", price: 134 },
  { name: "strawbery", price: 25 },
  { name: "carrot", price: 213 },
];

let expensiveVegetables = vegetables.filter(function (vegetables) {
  return vegetables.price > 100;
});
console.log(expensiveVegetables);

//  15.

let number1 = [22, 26, 84, 23];

let longNumber1 = number1.filter(function (number1) {});

//  16.

let i = 1;

while (i <= 10) {
  console.log(i);
  i++;
}

//  17.

let numbers2 = [10, 20, 30, 40, 50];
let sum2 = 0;
let i2 = 0;

while (i2 < numbers2.length) {
  sum2 += numbers2[i2];
  i2++;
}

console.log(sum2);

//  18.

let number = 1;

while (number <= 20) {
  console.log(number);
  number += 2;
}

//  19.

let number2 = 30;

while (number >= 10) {
  console.log(number);
  number--;
}

//  20.

let objects = [
  { name: "orange", type: "Fruit" },
  { name: "cucumber", type: "Vegetable" },
  { name: "apple", type: "Fruit" },
  { name: "cabbage", type: "Vegetable" },
];

let i3 = 0;
while (i < objects.length) {
  console.log(objects[i3].name);
  i3++;
}
