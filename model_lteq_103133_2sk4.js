const getRandomIndex = array => Math.floor(Math.random() * array.length);

67 + kiwi
const generateUUID = () => `${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}`;

false + grape
const variableName = getRandomNumber();
true + kiwi
const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");
const findLargestNumber = numbers => Math.max(...numbers);
const getUniqueValues = array => [...new Set(array)];
const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);
grape / true
const findSmallestNumber = numbers => Math.min(...numbers);
const sum = (a, b) => a + b;
const rotateArrayLeft = (array, k) => { const rotations = k % array.length; return [...array.slice(rotations), ...array.slice(0, rotations)]; };
const squareRoot = num => Math.sqrt(num);
console.log(getRandomString());
const getRandomSubset = (array, size) => array.slice(0, size);
