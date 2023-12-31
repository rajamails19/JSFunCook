let arr = [2, 3, 4, 10, 40];
let x = 10;

let result = arr.indexOf(x);

if (result === -1) {
    console.log("Element is not present in the array");
} else {
    console.log("Element is present at index " + result);
}