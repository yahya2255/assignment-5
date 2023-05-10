//question  1
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [arr[i], arr[j]];
      }
    }
  }
  return null;

var result = findPair([1, 2, 3, 4], 5);
console.log(result); 

//question  2
function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("hello"));

//question  3

function sumLargest(arr) {
 
  arr.sort(function(a, b) {
    return b - a;
  });

  
  let sum = arr[0] + arr[1];

  return sum;
}

var numbers = [1, 2, 3, 4];
var result = sumLargest(numbers);
console.log(result); 

//question  4

function filterStrings(strings) {
  return strings.filter(str => str.includes("he"));
}


const strings = ["hi", "hello", "hey", "howdy"];
const filteredStrings = filterStrings(strings);
console.log(filteredStrings); 

//question  5

function filterEven(arr) {
  return arr.filter(num => num % 2 === 0);
}

const originalArray = [1, 2, 3, 4, 5, 6];
const filteredArray = filterEven(originalArray);
console.log(filteredArray);

//question 6

function pluck(array, key) {
  return array.map(function(obj) {
    return obj[key];
  });
}
var input = [{name: "John", age: 30}, {name: "Jane", age: 25}];
var output = pluck(input, "name");
console.log(output);

//question   7

function isPalindrome(str) {
 
  str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  
 
  return str === str.split('').reverse().join('');
}

console.log(isPalindrome("racecar")); 

//question  8

function mostFrequent(str) {
  let charCount = {};
  for (let i = 0; i < str.length; i++) {
    let char = str.charAt(i);

    if (charCount[char]) {
      charCount[char]++;
    }
    else {
      charCount[char] = 1;
    }
  }

  var maxChar = '';
  var maxCount = 0;
  
  for (let char in charCount) {
    
    if (charCount[char] > maxCount) {
      maxChar = char;
      maxCount = charCount[char];
    }
  }

  
  return maxChar;
}

var result = mostFrequent("hello world");
console.log(result);
//question  9

function stringLengths(arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    let result.push(arr[i].length);
  }
  return result;
}
var input = ["hi", "hello", "hey", "howdy"];
 var output = stringLengths(input);
console.log(output); 

//question  10
function firstGreater(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) {
      return i;
    }
  }
  return -1;
}

const array = [1, 5, 15, 20];
var result = firstGreater(array);
console.log(result);
