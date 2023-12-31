
function findSecondLargest(arr) {
    if (arr.length < 2) {
        return "Array should have at least two elements";
    }

    arr.sort((a, b) => b - a);

    let uniqueSorted = [...new Set(arr)]; // Remove duplicates if any

    return uniqueSorted[1];
}

// Example usage
let array = [5, 3, 8, 2, 9, 1];
let secondLargest = findSecondLargest(array);
console.log("Second largest number:", secondLargest);

// "Second largest number:", 8