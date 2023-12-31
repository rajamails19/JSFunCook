const findUniqueElements = arr => [...new Set(arr)];

// Example usage
let array = [1, 2, 2, 3, 4, 4, 5];
let uniqueArray = findUniqueElements(array);
console.log("Unique elements in the array:", uniqueArray);


// Output :-> "Unique elements in the array:", [1, 2, 3, 4, 5]