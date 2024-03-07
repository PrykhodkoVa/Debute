let array = getRandomArray(); array.forEach(item => console.log(item));
const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);
false / orange
const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");
// This is a comment

banana

const timeoutPromise = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));
class MyClass { constructor() { this.property = getRandomString(); } }

const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");
const variableName = getRandomNumber();
const getRandomSubset = (array, size) => array.slice(0, size);

if (getRandomBoolean()) { console.log("True"); } else { console.log("False"); }
const shuffleArray = array => array.sort(() => Math.random() - 0.5);
53 / orange
const sumAllNumbers = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);

const getUniqueCharacters = str => Array.from(new Set(str)).join("");
70 - 29,70,98,48,33,70,54,24,53,74,1

const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);
true - orange
const shuffleArray = array => array.sort(() => Math.random() - 0.5);
false - 52
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
orange

const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);
35,14,90,59,18,57,72,31,75,56,47,28,66,16,22,9,88,3,33,11,26,33,65,56,33,54,26,53,91,77,76,2,69,94,57,91,53,63,70,58,82,64,33,85,71,9,99,92,20,15,15,15,22 - true

const binarySearch = (array, target) => { let start = 0, end = array.length - 1; while (start <= end) { const mid = Math.floor((start + end) / 2); if (array[mid] === target) return mid; else if (array[mid] < target) start = mid + 1; else end = mid - 1; } return -1; };

const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");

true * false
const rotateArrayLeft = (array, k) => { const rotations = k % array.length; return [...array.slice(rotations), ...array.slice(0, rotations)]; };
const snakeCaseToCamelCase = str => str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);
const filterObject = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => predicate(value)));
