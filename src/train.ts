// Task-ZJ
function reducedNestedArray(arr: any[]): number {
  let sum = 0;

  for ( let i = 0; i < arr.length; i++) {
    if ( typeof arr[i] === "object" ) {
      sum += reducedNestedArray(arr[i]);
    } else {
      sum += arr[i];
    }
  }

  return sum
}
console.log("Qiymat:", reducedNestedArray([1, [1, 2, [4]]]));

// Task-ZI
function delayHelloWorld(matn: string): void {
  setTimeout(function () {
    console.log("result:", matn)
  }, 3000);
};  
delayHelloWorld("Hello World")


// Task-ZH
// function findDisappearedNumbers(arr: number[]): number[] {
//   let result: number[] = [];

//   arr.sort((a, b) => a - b);

//   let min = arr[0];
//   let max = arr[arr.length - 1];

//   for ( let i = min; i <= max; i++) {
//     if ( !arr.includes(i)) {
//       result.push(i);
//     }
//   }
//   return result
// }

// const result = findDisappearedNumbers([1, 3, 4, 7]);
// console.log("result:", result);


// Task-ZG
// function convertToSnakeCase (text: string): string {
//   let words = text.split(" ");
//   return words.join("_");
// }
// const result = convertToSnakeCase("name should be a string");
// console.log("result:", result )
// console.log(typeof result)

// Task-ZF

// function capitalizeWords(text: string): string {
//   let words = text.split(" ");
//   let result: string[] = [];

//   for (let i = 0; i < words.length; i++) {
//     if (words[i].length > 2) {
//       result.push(
//         words[i][0].toUpperCase() + words[i].slice(1)
//       );
//     } else {
//       result.push(words[i]);
//     }
//   }

//   return result.join(" ");
// }

// const result = capitalizeWords("name should be a string");
// console.log("Result:", result);
// console.log(typeof result);

// Task-ZE

// function removeDuplicate(text: string): string {
//   let result = "";

//   for (let i = 0; i < text.length; i++) {
//     if (!result.includes(text[i])) {
//       result += text[i];
//     }
//   }

//   return result;
// }
// const result = removeDuplicate("stringg");
// console.log("result:", result);

// Task-ZD
// function changeNumberInArray(index: number, arr: number[], justnumber: number): number[] {
//   arr[index] = justnumber;
//   return arr;
// }
// const result = changeNumberInArray(1, [1, 3, 7, 2], 2);
// console.log("result:", result);

// Task-ZC
// function celsiusToFahrenheit(a: number): number {
//   return (a * 1.8) + 32;
// };
// const result = celsiusToFahrenheit(0);
// const result2 = celsiusToFahrenheit(10);
// console.log("result=>", result, "&&", "result2=>", result2);

// Task-ZB
// function randomBetween(a: number, b: number) {
//   return Math.floor(Math.random() * (b - a + 1)) + a;
// }
     
// console.log("result=>", randomBetween(30, 50));
// Task-Z
// function sumEvens(arr: number[]): number {
//   let sum = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       sum += arr[i];
//     }
//   }

//   return sum;
// }
// const result = sumEvens([1, 2, 3, ])
// console.log("result=>", result);

// Task-Y
// function findIntersection(arr1: any[], arr2: any[]): any[] {
//   let result: any[] = [];

//   for (let i = 0; i < arr1.length; i++) {
//     if (arr2.includes(arr1[i]) && !result.includes(arr1[i])) {
//       result.push(arr1[i]);
//     }
//   }

//   return result;
// }
// const result = findIntersection([1, 2, 3], [3, 2, 0]); 
// console.log("rsult=>", result);


// Task-X
// function counterOccurences(obj: any, key: string): number {
//   let count = 0;
//   for (let k in obj) {
//     if (k === key) {
//       count++;
//     }

//     if (typeof obj[k] === "object" && obj[k] !== null) {
//       count += counterOccurences(obj[k], key);
//     }
//   }
//   return count;
// }

// const result = counterOccurences({model: "Bugatti", steer: {model: "HANKOOK"}}, "model");
// console.log("result:", result);

// Task-W
// function chunkArray(arr: number[], size: number): number[][] {
//   let result = [];
//   for (let i = 0; i < arr.length; i += size) {
//     result.push(arr.slice(i, i + size));
//   }

//   return result;
// }

// console.log("Result:", chunkArray([1,2,3,4,5,6,7,8,9,10], 3));
// Task- V
// function countChars(text: string): Record<string, number> {
//   let result: any = {};

//   for (let i = 0; i < text.length; i++) {
//     let char = text[i];

//     if (result[char]) {
//       result[char]++;
//     } else {
//       result[char] = 1;
//     }
//   }

//   return result;
// }
// console.log("natijaa:", countChars("hello"))
// // Task- U
// function sumOdds (n: number): number {
//   let count = 0;
//   for ( let i = 1; i < n; i++) {
//     if ( i % 2 !== 0) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log("sumOdds:", sumOdds(9));
// console.log("sumOdds2:", sumOdds(11));
// // Task-T
// function mergeSortedArrays(arr1: number[], arr2: number[]): number[] {
//   return arr1.concat(arr2).sort((a, b) => a - b);
// }
// console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));



// // Task-S
// function missingNumber(arr: number[]): number {
//   const n = arr.length;
//   let expectedSum = (n * (n + 1)) / 2;
//   let actualSum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     actualSum += arr[i];
//   }

//   return expectedSum - actualSum;
// }
// const MissingNumber = missingNumber([3, 0, 1]);
// console.log("MissingNumber:", MissingNumber)

// // Task- R
// function calculate(input: string): number {
//   let arr = input.split("+");
//   return +arr[0] + +arr[1];
// }
// const javob = calculate("1+3");
// console.log("javob:",javob);

// // TASK-Q
// function hasProperty(obj: object, str: string) {
//     if(str in obj) return true;
//     else return false;
// }
// const result =  hasProperty( {name: "BMW", model: "M3" }, "model");
// console.log("result:", result);

// const result1 = hasProperty( {name: "BMW", model: "M3" }, "year");
// console.log("result1:", result1);

// MI TASK-P
// function objectToArray( obj: any) {
//   let result = [];

//   for ( let key in obj) {
//     result.push([key, obj[key]]);
//   }
//   return result;
// }

// console.log(objectToArray({a: 10, b: 20}))

//MI_TASK-O
// function calculateSumOfNumbers( arr: any[]):number {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === "number") {
//       sum += arr[i];
//     }
//   }

//   return sum;
// }
// const result = calculateSumOfNumbers([10, "10", {son: 10}, true, 35]);
// console.log("result:", result);

// // MI_TASK- N
// function palindromCheck (word: string): boolean {
//   if (word === word.split("").reverse().join("")) return true;
//   else return false;
// };
// const check = palindromCheck("dad");
// const check1 = palindromCheck("son");


// console.log("check:", check);
// console.log("check1:", check1);
// //MI_TASK- M
// function getSquareNumbers(arr: number[]) {
//   const result = [];
  
//   for ( let i = 0; i < arr.length; i++) {
//     result.push({
//       number: arr[i],
//       square: arr[i] * arr[i]
//     });
//   }
//   return result;
// }
// console.log(getSquareNumbers([1, 2, 3]));

// //MI_TASK- L
// function reverseSentence(text: string):string {
//   return text
//     .split(" ")
//     .map(word => word.split("").reverse().join(""))
//     .join(" ");
// }
// const javob1 = reverseSentence("we like coding!")
// console.log("javob1:", javob1);

// // MI_TASK-K
// function countVowels(str: string): number {
//   let count = 0;
//   const vowels = "aeiouAEIOU";
//   for ( let i = 0; i < str.length; i++) {
//     if (vowels.includes(str[i])) {
//       count++;
//     }
//   }
//   return count;
// }

// const javob = countVowels("Devex academy");
// console.log("javob:", javob);

// //MI-TASK J
// function findLongestWord(text: string): string {
//   const words = text.split(" ");
//   let longest = words[0];

//   for (let i = 1; i < words.length; i++) {
//     if (words[i].length > longest.length) {
//       longest = words[i];
//     }
//   }

//   return longest;
// }
// console.log(findLongestWord("I came from Uzbekistan!"));


// // MI-TASK I
// function majorElement(arr: number[]) {
//   let maxCount = 1;
//   let result = arr[0];
//   for (let i = 0; i < arr.length-1; i++) {
//     let count = 1;
    
//     for ( let j = i+1; j < arr.length; j++) {
//       if(arr[i] === arr[j]) {
//         count++;
//       }
//     }
//     if (count > maxCount) {
//           maxCount = count;
//           result = arr[i];
//     }
//   }
//   return result;
// }
// const natija = majorElement([1,2,3,4,5,4,3,4]);
// console.log("natija:", natija);


/* 
Project Standards:
  -Logging standrds
  -Naming standards:
     function, method, variable => Camel Case. goHome
     class => Pascal      MemberService
     folder, file => Kebab    router-admin
     css => Snake          button_style
  
  -ERROR handling
*/


/**
  Traditional API
  Rest API
  GraphQl Api
  ...  

  cookie slef destroy
 */

// MI Task: TASK-H2
// function getDigits(str: string) {
//     let newStr: string = "";
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] >= "0" && str[i] <= "9") {
//             newStr += str[i]; 
//         }
//     }
//     return newStr; 
// }
// const result = getDigits("m14i1t");
// console.log(result);
// console.log(typeof result);

// function getDigits(str : string) {
//     let arr = str.split('');
//     return arr.filter(ele => ele ).join('');  
// }
// const a = getDigits("37ddg7b6");
// console.log(a);

// MI Task: TASK-H
// function getPositive(arr: number[]) {
//     return arr.filter(ele => ele > 0).join("")
// }
// const result = getPositive([1, -4, 2]);
// console.log("result:", result);
// console.log(typeof result);

// MI TASK: Task-G

// function getHighestIndex(arr: number[]): number {
//     let max = arr[0];
//     let maxIndex = 0;
//     for( let i = 1; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i];
//             maxIndex = i;
//         }
//     }
//     return maxIndex
// }

// const result = getHighestIndex([5, 21, 12, 21, 8]);
//console.log(result);