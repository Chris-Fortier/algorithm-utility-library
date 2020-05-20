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
function titleCase(str) {
   // This makes each word of a given sentence start with a capital letter but makes the rest of the letters lowercase.
   var words = str.split(" ");
   console.log(str);
   for (let wordIndex in words) {
      // for each word
      words[wordIndex] = words[wordIndex].toLowerCase(); // make word all lowercase first
      words[wordIndex] =
         words[wordIndex][0].toUpperCase() + words[wordIndex].slice(1); // make first letter capital
      console.log(words[wordIndex]);
   }
   const newString = words.join(" ");
   console.log(newString);
   return newString;
}

// Slice and Splice
function frankenSplice(arr1, arr2, n) {
   // This copies each element of the first array into the second array, in order, beginning inserting elements at index n of the second array.
   const arr2Left = arr2.slice(0, n);
   const arr2Right = arr2.slice(n);
   const output = arr2Left.concat(arr1, arr2Right);
   console.log(output);
   return output;
}
// Falsy Bouncer
function bouncer(arr) {
   // This will remove all falsy values from an array.
   return arr.filter((item) => Boolean(item));
}
// Where do I Belong
function getIndexToIns(arr, num) {
   // This will return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted.

   const sortedArray = arr.sort((a, b) => a - b); // sort in numerical order

   console.log(arr, sortedArray, num);
   for (let i = 0; i < sortedArray.length; i++) {
      if (num <= sortedArray[i]) {
         var lowestIndex = i;
         console.log("return", lowestIndex);
         return lowestIndex;
      }
   }
   console.log("return", sortedArray.length);
   return sortedArray.length;
}

// Mutations
function mutation(arr) {
   // This will return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
   const firstArray = arr[0].toLowerCase();
   const secondArray = arr[1].toLowerCase();
   let result = true;
   for (let letterIndex in secondArray) {
      // for every letter in the second arry
      const letter = secondArray[letterIndex];
      // see if its in the first array
      console.log(letter, firstArray.indexOf(letter) != -1);
      if (firstArray.indexOf(letter) == -1) {
         result = false;
      }
   }
   return result;
}

// Chunky Monkey
function chunkArrayInGroups(arr, size) {
   // This splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

   var newArray = [[]];
   var newSubArrayWeAreOn = 0;
   var indexWithinNewSubArray = 0;

   for (
      let originalIndex = 0;
      originalIndex < arr.length;
      originalIndex++
   ) // iterate over every item in the original array
   {
      // console.log(originalIndex);
      if (indexWithinNewSubArray >= size) {
         // start a new subarray
         newArray.push([]);
         newSubArrayWeAreOn++;
         indexWithinNewSubArray = 0;
      }
      newArray[newSubArrayWeAreOn].push(arr[originalIndex]);

      indexWithinNewSubArray++;
   }
   console.log(newArray);
   return newArray;
}
