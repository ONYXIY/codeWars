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
// console.log(ageGroup(students));

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
    } else return true;
  } else return false;
}
// console.log(validatePIN("42322"));

//---------------------------------------------------------------------------------
// Получить единый массив любимых пицц каждого друга

const friends = [
  { name: "alex", pizzas: ["cheese", "peopperoni"] },
  { name: "mike", pizzas: ["salami", "margarita"] },
  { name: "sasha", pizzas: ["meat"] },
  { name: "anna", pizzas: ["fish"] },
];

const pizzas = friends.reduce((acc, curr) => {
  return [...acc, ...curr.pizzas];
}, []);
// console.log(pizzas)

//---------------------------------------------------------------------------------

// You will be given an array of objects (associative arrays in PHP, table in COBOL)
// representing data about developers who have signed up to attend the next coding meetup that you are organising.
// Your task is to return an object (associative array in PHP, table in COBOL)
// which includes the count of each coding language represented at the meetup.

// For example, given the following input array:

var list1 = [
  {
    firstName: "Noah",
    lastName: "M.",
    country: "Switzerland",
    continent: "Europe",
    age: 19,
    language: "C",
  },
  {
    firstName: "Anna",
    lastName: "R.",
    country: "Liechtenstein",
    continent: "Europe",
    age: 52,
    language: "JavaScript",
  },
  {
    firstName: "Ramon",
    lastName: "R.",
    country: "Paraguay",
    continent: "Americas",
    age: 29,
    language: "Ruby",
  },
  {
    firstName: "George",
    lastName: "B.",
    country: "England",
    continent: "Europe",
    age: 81,
    language: "C",
  },
];
// your function should return the following object (associative array in PHP, table in COBOL):

// { C: 2, JavaScript: 1, Ruby: 1 }
function countLanguages(list1) {
  let obj = {};
  list1.forEach((item) => {
    if (!obj[item.language]) {
      obj[item.language] = 1;
    } else {
      obj[item.language]++;
    }
  });
  return obj;
}
//---------------------------------------------------------------------------------
// You will be given an array of objects (associative arrays in PHP, tables in COBOL)
// representing data about developers who have signed up to attend the next coding meetup that you are organising.
// Your task is to return an array where each object will have a new property 'greeting' with the following string value:
// Hi < firstName here >, what do you like the most about < language here >?
// For example, given the following input array:

var list1 = [
  {
    firstName: "Sofia",
    lastName: "I.",
    country: "Argentina",
    continent: "Americas",
    age: 35,
    language: "Java",
  },
  {
    firstName: "Lukas",
    lastName: "X.",
    country: "Croatia",
    continent: "Europe",
    age: 35,
    language: "Python",
  },
  {
    firstName: "Madison",
    lastName: "U.",
    country: "United States",
    continent: "Americas",
    age: 32,
    language: "Ruby",
  },
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
  for (let i = 0; i < list.length; i++) {
    let name = list[i].firstName;
    let language = list[i].language;
    list[
      i
    ].greeting = `Hi ${name}, what do you like the most about ${language}?`;
  }
  return list;
}
//---------------------------------------------------------------------------------
// You will be given an array of objects (hashes in ruby)
// representing data about developers who have signed up to attend the coding meetup that you are organising for the first time.
// Your task is to return the number of JavaScript developers coming from Europe.
// For example, given the following list:

var list1 = [
  {
    firstName: "Noah",
    lastName: "M.",
    country: "Switzerland",
    continent: "Europe",
    age: 19,
    language: "JavaScript",
  },
  {
    firstName: "Maia",
    lastName: "S.",
    country: "Tahiti",
    continent: "Oceania",
    age: 28,
    language: "JavaScript",
  },
  {
    firstName: "Shufen",
    lastName: "L.",
    country: "Taiwan",
    continent: "Asia",
    age: 35,
    language: "HTML",
  },
  {
    firstName: "Sumayah",
    lastName: "M.",
    country: "Tajikistan",
    continent: "Asia",
    age: 30,
    language: "CSS",
  },
];
// your function should return number 1.

// If, there are no JavaScript developers from Europe then your function should return 0.

// Notes:

// The format of the strings will always be Europe and JavaScript.
// All data will always be valid and uniform as in the example above.

function countDevelopers(list1) {
  let count = 0;
  let newList = list1.filter((item) => {
    return item.continent === "Europe" && item.language === "JavaScript";
  });
  for (let i = 0; i < newList.length; i++) {
    count++;
  }
  return count;
}

//---------------------------------------------------------------------------
const url =
  "https://www.adaface.com/online-compiler/online-javascript-compiler";
function returnHost(url) {
  const arr = url.split("/");
  return arr[2];
}
// console.log(returnHost(url))

//---------------------------------------------------------------------------
const req1 = {
  name: "name1",
  phone: 9271122331,
};
const req5 = {
  name: "name1",
  phone: 92711223311,
};
const req2 = {
  name: "name1",
  phone: 89271122332,
};

const req3 = {
  name: "name1",
  phone: "79271122333",
};

const req4 = {
  name: "name1",
  phone: ["79271122334", 9271122335],
};

function ruNums(req) {
  let phoneNum = Array.isArray(req.phone) ? req.phone : [req.phone];
  let transformPhone = phoneNum.map((phone) => {
    let phoneStr = phone.toString();
    if (phoneStr.length <= 10) {
      return "+7" + phoneStr;
    }
    if (phoneNum.length === 11) {
      return "+7" + phoneStr.substring(1);
    }
    return phoneStr;
  });
  return transformPhone.length === 1 ? transformPhone[0] : transformPhone;
}
console.log(ruNums(req4));

//---------------------------------------------------------------------------

// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"

function domainName(url) {
  let domain;
  if (url.indexOf("://") > -1) {
    domain = url.split("/")[2];
  } else {
    domain = url.split("/")[0];
  }
  if (domain.startsWith("www.")) {
    domain = domain.split("www.")[1];
  }
  return domain.split(".")[0];
}

///////////better decision
let domain;
if (url.indexOf("://") > -1) {
  domain = url.split("/")[2];
} else {
  domain = url.split("/")[0];
}
if (domain.startsWith("www.")) {
  domain = domain.split("www.")[1];
}
return domain.split(".")[0];

//---------------------------------------------------------------------------
// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

function solution(str) {
  let arr = [];
  if (str.length % 2 !== 0) {
    str += "_";
  }
  for (let i = 0; i < str.length; i += 2) {
    arr.push(str.slice(i, i + 2));
  }
  return arr;
}
//---------------------------------------------------------------------------
