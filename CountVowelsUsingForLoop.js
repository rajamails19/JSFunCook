function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;

    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
}

// Example usage
let sentence = "Hello, how are you?";
let vowelCount = countVowels(sentence);
console.log("Number of vowels:", vowelCount);

// "Number of vowels:", 7