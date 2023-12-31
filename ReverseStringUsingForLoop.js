const reverseString = str => {
    let reversed = '';
    for (let char of str) reversed = char + reversed;
    return reversed;
};

// Example usage
let originalString = 'Hello, World!';
let reversedString = reverseString(originalString);
console.log("Reversed string:", reversedString);


// "Reversed string:", "!dlroW ,olleH"