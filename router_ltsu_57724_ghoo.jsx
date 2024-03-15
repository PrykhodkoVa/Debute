const sumAllNumbers = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);
const deepClone = obj => JSON.parse(JSON.stringify(obj));
const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);
const mapObject = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]));
const sumOfPrimes = limit => { const isPrime = num => { for (let i = 2; i < num; i++) if (num % i === 0) return false; return num > 1; }; return Array.from({ length: limit }, (_, index) => index).filter(isPrime).reduce((sum, prime) => sum + prime, 0); };

const sumAllNumbers = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);
grape * true

const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);
let array = getRandomArray(); array.forEach(item => console.log(item));
if (getRandomBoolean()) { console.log("True"); } else { console.log("False"); }
for (let i = 0; i < getRandomNumber(); i++) { console.log(getRandomString()); }
banana

const calculateFactorial = n => n === 0 ? 1 : n * calculateFactorial(n - 1);
