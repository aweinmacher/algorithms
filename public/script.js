// NUMBERS

// Continue looping until the user stops you
// var array = ["first", "second", "third" , "last"];
// var _continue = true;
// var i = 0
// while (_continue) {
//   console.log(array[i]);
//   //increase i and allow the loop to continue forever if needed
//   i = (i + 1) % array.length;
//   //confirm() returns false if the user hits cancel
//   _continue = confirm("Press OK to continue");
// }

// Swap Two Number Variables Without Using a Temp Variable
// var a = 10, b = 20;
// a = a + b;
// b = a - b;
// a = a - b;
// console.log("a = " + a + ", b = " + b); // a = 20, b = 10

// Swap Two String Variables Without Using a Temp Variable
// var a = 'hi';
// var b = 'bye';
// a = b + a; // 'byehi'
// b = a.slice(b.length); // 'hi'
// a = a.substr(0, a.length-b.length); // 'bye'
// console.log('a = ' + a);
// console.log('b = ' + b);


// LOOPS
// var n = Math.floor(Math.random()*12)+1;
// console.log('random N = ' + n);
// Option 1: a New Year tree
// for (var i=1; i<=n; i++) {
//     var line = '';
//     for (let j=0; j<i; j++) {
//         line += '*'
//     }
//     console.log(line);
// }
// Option 2: reversed New Year tree
// for (var i=n; i>0; i--) {
//     var line = '';
//     for (let j=0; j<i; j++) {
//         line += '*'
//     }
//     console.log(line);
// }


// STRINGS - OPTION 1
// function reverse(str) {
//     var reversed = "";
//     for (var i = str.length - 1; i >= 0; i--) {
//         reversed += str[i];
//     }
//     return reversed;
// }
// STRINGS - OPTION 2 (actually 3 loops = 3N, but looks better)
// function reverse(str) {
//     return str.split("").reverse().join("");
// }

// console.log(reverse("dog")); //should return "god"
// console.log(reverse("race car")); //should return "rac ecar"

// PALINDROME
// function isPalindrome(str) {
//     str = str.toLowerCase();
//     if (str == reverse(str)) return true;
//     else return false
// }
// console.log(isPalindrome('Anna'));

// ENCRYPTED (SIMPLE CIPHER)
// function encrypt(str) {
//     var encrypted = '';
//     for (var i=0; i<str.length; i++) {
//         var n = str.charCodeAt(i);
//         var nextLetter = String.fromCharCode(n+1);
//         encrypted += nextLetter;
//     }
//     return encrypted
// }
// console.log(encrypt('Cat')); // Dbu


// DECRYPTION
// function decrypt(cipher) {
//     var decrypted = "";
//     for (var i=0; i<cipher.length; i++) {
//         var n = cipher.charCodeAt(i);
//         var prevLetter = String.fromCharCode(n-1);
//         decrypted += prevLetter;
//     }
//     return decrypted
// }
// console.log(decrypt('Dbu')); // Cat


// HARDER CIPHER
// String.prototype.nextChar = function(x) {
//     var n = x || 1;
//     return String.fromCharCode(this.charCodeAt(0) + n);
// }
// function encryptHard(str, secret) {
//     var cipher = '';
//     for (var i=0; i<str.length; i++) {
//         var secretPosition = i % secret.length;
//         var x = secret.charCodeAt(secretPosition) - 96;
//         cipher += str[i].nextChar(x);
//     }
//     return cipher;
// }
// console.log(encryptHard('elephant', 'cab')); // hmgsicqu


// DUPES - return a new array that removes any duplicates
// var array = ["dog", "cat", "camel", "bee", "camel", "dog", "dog", "elephant", "dolphin"];
// var dupeDict = {}
// function exists(item) {
//     if (dupeDict[item]) {
//         return true
//     }
//     dupeDict[item] = 1;
//     return false
// }
// function dupes(arr) {
//     for (var i = 0; i < arr.length; i++) {
//         if (exists(arr[i])) {
//             arr.splice(i, 1);
//             i--;
//         }
//     }
//     return arr;
// }
// console.log(dupes(array));

// JUMBLED - Given two arrays, return one array that includes all of the elements of both arrays, in a randomized order.
// var colors = ["red", "indigo", "white", "teal", "yellow"];
// var foods = ["bread", "cheese", "cucumber"];

// function jumble(arr1, arr2) {
//     var temp = arr1.concat(arr2);
//     var mutualLength = arr1.length + arr2.length;
//     var jumbledArr = [];
//     for (let i = 0; i < mutualLength; i++) {
//         let randomIndex = Math.floor(Math.random() * temp.length);
//         jumbledArr.push(temp.splice(randomIndex, 1)[0]);
//     }
//     return jumbledArr
// }
// console.log(jumble(colors, foods)); // could return: ["cheese",teal","cucumber","red","bread","yellow","white","indigo"]

// BUBBLE SORT O(N²)
// var array = [5, 2, 8, 1, 45, 0, 2, 4];
// function sort(arr) {
//     console.log(arr);
//     var temp;
//     var n = arr.length;
//     for (var j = 0; j < arr.length; j++) {
//         for (var i = 0; i < n; i++) {
//             if (arr[i + 1] < arr[i]) {
//                 temp = arr[i];
//                 arr[i] = arr[i + 1];
//                 arr[i + 1] = temp;
//             }
//         }
//         n--;
//     }
//     return arr;
// }
// console.log(sort(array));

// ************************ Merge Sorting (n*log₂(n)) **********************
// var array = [27, 10, 12, 25, 34, 16, 15, 31, 19];
// console.log('arr: ', array);

// function MergeSort(arr) {
//     //Exit condition
//     if (arr.length < 2) {
//         return arr;
//     }

//     // Calculate the middle of the elements
//     var middle = Math.floor(arr.length / 2);

//     // Divide 
//     var leftRange = arr.slice(0, middle);
//     var rightRange = arr.slice(middle, arr.length);

//     // Handle each array
//     leftRange = MergeSort(leftRange);
//     rightRange = MergeSort(rightRange);

//     var res = [];

//     // Loop until one of the arrays is empty.
//     while (leftRange.length > 0 && rightRange.length > 0) {
//         if (leftRange[0] <= rightRange[0]) {
//             res.push(leftRange.shift());
//         } else {
//             res.push(rightRange.shift());
//         }
//     }

//     // Check if you have some element left in one of the arrays
//     while (leftRange.length > 0) {
//         res.push(leftRange.shift());
//     }
//     while (rightRange.length > 0) {
//         res.push(rightRange.shift());
//     }

//     return res;
// }


// function MergeSort(arr) {
//     //Exit condition
//     if (arr.length < 2) {
//         return arr;
//     }
//     // Calculate the middle of the elements
//     var middle = Math.floor(arr.length / 2);

//     // Divide 
//     var leftRange = arr.slice(0, middle);
//     var rightRange = arr.slice(middle, arr.length);

//     // Handle each array
//     leftRange = MergeSort(leftRange);
//     rightRange = MergeSort(rightRange);

//     return MergeArrays(leftRange, rightRange);
// }

// function MergeArrays(leftRange, rightRange) {
//     var res = [];

//     // Loop until one of the arrays is empty.
//     while (leftRange.length > 0 && rightRange.length > 0) {
//         if (leftRange[0] <= rightRange[0]) {
//             res.push(leftRange.shift());
//         } else {
//             res.push(rightRange.shift());
//         }
//     }

//     // Check if you have some element left in one of the arrays
//     while (leftRange.length > 0) {
//         res.push(leftRange.shift());
//     }
//     while (rightRange.length > 0) {
//         res.push(rightRange.shift());
//     }

//     return res;
// }

// console.log('result: ', MergeSort(array));



// RECURSIVE FUNCTIONS (WEEK 11 DAY 4)
// Exercise 1 (check if a number n is prime)
// var n = Math.floor(Math.random() * 100 + 1);

// function primeCheck(n, div) {
//     div = Math.round(div);
//     // termination condition and base case
//     if (n == 1 || div === 1) {
//         return console.log(`${n} is prime`);
//     }

//     // recursive case
//     if (Number.isInteger(n / div)) {
//         return console.log(`${n} is not prime`);
//     }
//     primeCheck(n, div-1);
// }
// primeCheck(n, n/2);

// Comment to the code: hn = half n = n/2
// function isPrime(n, hn) {
//     if (hn === 0 || n === 1) {
//         return true;
//     }
//     hn = hn || parseInt(n / 2);
//     if (n % hn === 0 && hn !== 1) {
//         return false;
//     } else {
//         return isPrime(n, hn - 1);
//     }
// };



// console.log("result: ", primeCheck(n));


// Exercise 2: Write a function using recursion to print numbers from n to 0
// function countDown(n) {
//     if ( n >= 0 ) {
//         console.log(n);
//         countDown(n-1);
//     }
// }
// countDown(10);

// option 2
// function countdown(value) {
//     if (value > 0) {
//         console.log(value);
//         return countdown(value - 1);
//     } else {
//         return value;
//     }
// };
// countdown(10);

// function start_asc(num) {
//     const n = num;
//     function asc(cur) {
//         if (cur <= n) {
//             console.log(cur);
//             asc(cur+1);
//         }
//     }
//     asc(0);
// }
// start_asc(5);

// function asc(n, cur) {
//     if (cur <= n) {
//         console.log(cur);
//         asc(n, cur+1);
//     }
// }
// asc(5,0);

// Write a function using recursion to print numbers from 0 to n
// function asc(n) {
//     if (n > 0) {
//         asc(n - 1);
//     }
//     console.log(n);
//     return n++
// }
// asc(5);