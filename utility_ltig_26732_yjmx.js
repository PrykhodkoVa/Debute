const squareRoot = num => Math.sqrt(num);
const reverseString = str => str.split("").reverse().join("");

const greet = name => `Hello, ${name}!`;
if (getRandomBoolean()) { console.log("True"); } else { console.log("False"); }
const sumOfPrimes = limit => { const isPrime = num => { for (let i = 2; i < num; i++) if (num % i === 0) return false; return num > 1; }; return Array.from({ length: limit }, (_, index) => index).filter(isPrime).reduce((sum, prime) => sum + prime, 0); };
const calculateFactorial = n => n === 0 ? 1 : n * calculateFactorial(n - 1);
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
orange * 98,21,50,65,64,4,9,90,6,64,21,69,70,70,81,74,71,40,38,16,89,5,1,45,19,31,23,5,70,51,2,24,86,61,83,57,25,33,50

const binarySearch = (array, target) => { let start = 0, end = array.length - 1; while (start <= end) { const mid = Math.floor((start + end) / 2); if (array[mid] === target) return mid; else if (array[mid] < target) start = mid + 1; else end = mid - 1; } return -1; };
