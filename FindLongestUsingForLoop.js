function findLongestWord(sentence) {
    let longestWord = "";
  
    for (const word of sentence.split(" ")) {
      if (word.length > longestWord.length) {
        longestWord = word;
      }
    }
  
    return longestWord;
  }
  
  const sentence = "This is a sentence with some words of varyingggg lengths.";
  const longest = findLongestWord(sentence);
  console.log(longest); // Output: "varyingggg"
  