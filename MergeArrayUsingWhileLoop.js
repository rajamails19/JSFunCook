function mergeSortedArrays(arr1, arr2) {
    const merged = [];
    let i = 0, j = 0;
  
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
        merged.push(arr1[i]);
        i++;
      } else {
        merged.push(arr2[j]);
        j++;
      }
    }
  
    return merged.concat(arr1.slice(i)).concat(arr2.slice(j));
  }
  
  const arr1 = [1, 3, 5, 7];
  const arr2 = [2, 4, 6, 8];
  const merged = mergeSortedArrays(arr1, arr2);
  console.log(merged); // Output: [1, 2, 3, 4, 5, 6, 7, 8]
  