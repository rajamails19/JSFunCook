function capitalizeFirstLetter(sentence) {
    return sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

// Example usage
let text = "capitalize the first letter of each word";
let capitalizedText = capitalizeFirstLetter(text);
console.log("Capitalized text:", capitalizedText);


// "Capitalized text:", "Capitalize The First Letter Of Each Word"