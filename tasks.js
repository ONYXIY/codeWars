// Task (Sort the odd)
// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

function sortArray(array) {
  const newArr = [...array]
    .filter((item) => item % 2 !== 0)
    .sort((a, b) => a - b);
  const res = array.map((item) => (item % 2 !== 0 ? newArr.shift() : item));
  return res;
}
//---------------------------------------------------------------------------------
//how many each element occurs in the array?
//{kiwi: 3, apple: 2, orange: 1}
const fruits = ["kiwi", "apple", "kiwi", "orange", "kiwi", "apple"];

const fruitCount = (arr) => {
  const count = {};
  arr.forEach((item) => {
    if (!count[item]) {
      count[item] = 1;
    } else {
      count[item]++;
    }
  });
  return count;
};

//---------------------------------------------------------------------------------
//Create an array with unique values
const myFruits = ["kiwi", "apple", "kiwi", "orange", "kiwi", "apple"];

const createUniqArr = (arr) => {
  let UniqArr = [...new Set(arr)];
  return UniqArr;
};

//---------------------------------------------------------------------------------
// Создать функцию, которая сгруппирует студентов по возрасту
// На выходе получить объект, где ключ - возраст. а значение массив студентов

const students = [
  { name: "alex", age: 20 },
  { name: "mike", age: 24 },
  { name: "masha", age: 20 },
  { name: "sasha", age: 18 },
];

const ageGroup = (arr) => {
  let group = {};
  arr.forEach((item) => {
    if (!group[item.age]) {
      group[item.age] = [item];
    } else {
      group[item.age].push(item);
    }
  });
  return group;
};
console.log(ageGroup(students));

//---------------------------------------------------------------------------------
// This Kata is intended as a small challenge for my students
// Create a function that takes a string argument and returns that same string with all vowels removed (vowels are "a", "e", "i", "o", "u").
// Example (Input --> Output)
// "drake" --> "drk"
// "aeiou" --> ""
// remove_vowels("drake") // => "drk"
// remove_vowels("aeiou") // => ""

var removeVowels = function (str) {
  let arr = str
    .split("")
    .filter((i) => ["a", "e", "i", "o", "u"].indexOf(i) === -1)
    .join("");
  return arr;
};

//---------------------------------------------------------------------------------
// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// Examples (Input --> Output)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

function validatePIN(pin) {
  let num = Number(pin);
  if (pin.length === 4 || pin.length === 6) {
    if (!Number(num)) {
      return false;
    }else return true;
  } else return false;
}
console.log(validatePIN("42322"));

//---------------------------------------------------------------------------------
// Получить единый массив любимых пицц каждого друга

const friends = [
  { name: 'alex', pizzas: ['cheese', 'peopperoni']},
  { name: 'mike', pizzas: ['salami', 'margarita']},
  { name: 'sasha', pizzas: ['meat']},
  { name: 'anna', pizzas: ['fish']},
]

const pizzas = friends.reduce((acc, curr) =>{
  return [...acc, ...curr.pizzas];
},[])
console.log(pizzas)


//---------------------------------------------------------------------------------

// You will be given an array of objects (associative arrays in PHP, table in COBOL)
// representing data about developers who have signed up to attend the next coding meetup that you are organising.
// Your task is to return an object (associative array in PHP, table in COBOL)
// which includes the count of each coding language represented at the meetup.

// For example, given the following input array:

var list1 = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C' },
  { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript' },
  { firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby' },
  { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C' },
];
// your function should return the following object (associative array in PHP, table in COBOL):

// { C: 2, JavaScript: 1, Ruby: 1 }
function countLanguages(list1) {
  let obj = {};
  list1.forEach((item) => {
if(!obj[item.language]){
obj[item.language] = 1
}else{
obj[item.language]++}
})
  return obj
}
//---------------------------------------------------------------------------------
// You will be given an array of objects (associative arrays in PHP, tables in COBOL)
// representing data about developers who have signed up to attend the next coding meetup that you are organising.
// Your task is to return an array where each object will have a new property 'greeting' with the following string value:
// Hi < firstName here >, what do you like the most about < language here >?
// For example, given the following input array:

var list1 = [
  { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
  { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
];
// your function should return the following array:

// [
//   { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java',
//     greeting: 'Hi Sofia, what do you like the most about Java?'
//   },
//   { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python',
//     greeting: 'Hi Lukas, what do you like the most about Python?'
//   },
//   { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby',
//     greeting: 'Hi Madison, what do you like the most about Ruby?'
//   } 
// ];

function greetDevelopers(list) {
  for(let i = 0; i< list.length; i++){
  let name = list[i].firstName;
  let language = list[i].language;
  list[i].greeting = (`Hi ${name}, what do you like the most about ${language}?`)
}
  return list
  
}
//---------------------------------------------------------------------------------
