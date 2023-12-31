const isPrime = number => number > 1 && Array.from({ length: Math.floor(Math.sqrt(number)) }, (_, i) => i + 2).every(x => number % x !== 0);

// Example usage
let num = 31;
console.log(`${num} is ${isPrime(num) ? 'a prime number' : 'not a prime number'}`);


// "31 is a prime number"
