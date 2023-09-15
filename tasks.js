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
