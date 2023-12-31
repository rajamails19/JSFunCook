function isPrime(number) {
    if (number <= 1) {
        return false;
    }
    
    for (let i = 2; i <= number / 2; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    
    return true;
}

// Example usage
let num = 17;
if (isPrime(num)) {
    console.log(num + " is a prime number");
} else {
    console.log(num + " is not a prime number");
}

// "17 is a prime number"