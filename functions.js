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
function largestInEachSubarray(arr) {
   let output = []; // make a new array
   for (let i = 0; i < arr.length; i++) {
      let max = null;
      for (let j = 0; j < arr[i].length; j++) {
         // console.log(i,j)
         if (arr[i][j] > max || max == null) max = arr[i][j];
      }
      output.push(max);
   }
   console.log(output);
   return output;
}

// Confirm the Ending
function confirmEnding(str, target) {
   // checks if str ends with target
   return str.slice(str.length - target.length) == target;
}

// Repeat a String Repeat a String
function repeatStringNumTimes(str, num) {
   // This returns a new string that is str repeated num times.
   let newStr = "";
   for (let i = 0; i < num; i++) {
      newStr += str;
   }
   console.log(newStr);
   return newStr;
}

// Truncate a String
function truncateString(str, num) {
   // This will return a truncated string with ... after it if its longer than num.
   if (str.length > num) {
      return str.slice(0, num) + "...";
   }
   return str;
}

// Finders Keepers
function findElement(arr, func = (num) => num % 2 === 0) {
   // This looks through an array and returns the first element that passes the given function.
   const newArr = arr.filter(func);
   console.log(newArr);
   return newArr[0];
}

// Boo who
function booWho(bool) {
   // Checks if the argument is a boolean value
   return bool === true || bool === false;
}

// Title Case a Sentence

// Slice and Splice

// Falsy Bouncer

// Where do I Belong

// Mutations

// Chunky Monkey
