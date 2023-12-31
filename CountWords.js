function countWords(sentence) {
    if (!sentence || !sentence.trim()) {
        return 0; // Return 0 for empty or whitespace-only strings
    }

    return sentence.trim().split(/\s+/).length;
}

// Example usage
let text = "Count the words in this sentence.";
let wordCount = countWords(text);
console.log("Number of words:", wordCount);


// "Number of words:", 6