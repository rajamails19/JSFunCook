function mergeSortedArrays(arr1, arr2) {
    return [...arr1, ...arr2].sort((a, b) => a - b);
}

// Example usage
let array1 = [1, 3, 5, 7];
let array2 = [2, 4, 6, 8, 10];
let mergedArray = mergeSortedArrays(array1, array2);
console.log("Merged sorted array:", mergedArray);


// "Merged sorted array:", [1, 2, 3, 4, 5, 6, 7, 8, 10]