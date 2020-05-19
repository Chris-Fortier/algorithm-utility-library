// Convert Celsius to Fahrenheit
function convertToF(celsius) {
   let fahrenheit = celsius * (9 / 5) + 32;
   return fahrenheit;
}

// Reverse a String
function reverseString(str) {
   var revStr = "";
   for (let i = 0; i < str.length; i++) revStr += str[str.length - i - 1];
   console.log(revStr);
   return revStr;
}

// Factorialize a Number
function factorialize(num) {
   var output = 1;
   for (let i = 2; i <= num; i++) output *= i;
   console.log(output);
   return output;
}

// Find the Longest Word in a String
function findLongestWordLength(str) {
   var lengthOfLongestWord = 0;
   const words = str.split(" ");
   for (let wordIndex in words) {
      console.log(words[wordIndex]);
      if (words[wordIndex].length > lengthOfLongestWord)
         lengthOfLongestWord = words[wordIndex].length;
   }
   console.log(lengthOfLongestWord);
   return lengthOfLongestWord;
}

// Return Largest Numbers in Arrays

// Confirm the Ending

// Repeat a String Repeat a String

// Truncate a String

// Finders Keepers

// Boo who

// Title Case a Sentence

// Slice and Splice

// Falsy Bouncer

// Where do I Belong

// Mutations

// Chunky Monkey
