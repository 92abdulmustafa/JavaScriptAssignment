// Question 1

function number(num) {
  var reverseNum = Number(String(num).split("").reverse().join(""));
  console.log(reverseNum);
}
// number(45678);

// Question 2

function palindrome(string) {
  var splitString = string.split(" ");
  var count = 0;
  for (let i = 0; i < splitString.length; i++) {
    var reverseString = splitString[i].split("").reverse().join("");
    if (reverseString === splitString[i]) {
      console.log(splitString[i], "is palindrome");
      count += 1;
    }
  }
  console.log(count, " Palindrome words in a sentence");
}
// palindrome('lorem ipsum dolor madam what are you doing nan mom dad');

// Question 3

function combinationGenerator(str) {
  var comb;
  for (let i = 0; i < str.length; i++) {
    comb = str.slice(0, i + 1);
    console.log(comb);
  }
}
// combinationGenerator('cat')

// Question 4

function alphabiticalOrder(str) {
  console.log(str.split(" ").sort().join(" "));
}
// alphabiticalOrder('Muhammad Abdul');

// Question 5

function toUpperCaseFirstLetterOfEachWord(str) {
  var splitstr = str.split(" ");
  var words = [];
  var string;
  for (let i = 0; i < splitstr.length; i++) {
    words[i] = splitstr[i].charAt(0).toUpperCase() + splitstr[i].slice(1);
    string = words.join(" ");
  }
  console.log(string);
}
// toUpperCaseFirstLetterOfEachWord('muhammad abdul mustafa azmi');

// Question 6
function longestString(str) {
  var splitstr = str.split(" ");
  var longestString;
  for (let i = 0; i < splitstr.length; i++) {
    // longestString = splitstr[i];
    if (splitstr[i].length < splitstr[i + 1].length) {
      return longestString = splitstr[i + 1];
    }else{
        return longestString=splitstr[i];
    }
  }
//   console.log(longestString);
}
// console.log(longestString("Muhammad AbdulMustafa Azmi"));

// Question 7

function countVowels(str) {
  var vowels = ["a", "e", "i", "o", "u"];
  var count = 0;
  for (let i = 0; i < str.length; i++) {
    // console.log(count)
    if (vowels.includes(str.toLowerCase().charAt(i))) {
      count += 1;
    }
  }
  console.log("The sentence contain", count, "vowels");
}
// countVowels('I am Muhammad');

// Question 8
function prime(num) {
  // var isPrime = true;
  // if(num===1){
  //     return num+" is not prime number";
  // }
  // else if(num>=2){
  //     for(let i=2; i<num; i++){
  //         if(num%i===0){
  //             isPrime=!isPrime;
  //             break;
  //         }
  //     }
  //     if(isPrime){
  //         console.log("Given number is prime");
  //     }
  //     else{
  //         console.log("Given number is not prime");
  //     }
  // }
  for (let i = 2, s = Math.sqrt(num); i <= s; i++)
    if (num % i === 0) return num+" is not prime";
  return num + " is prime";
}
// console.log(prime(4));
// Question 9

function typeOfParam(param) {
  return typeof param;
}
// console.log(typeOfParam());

function findSecLargestAndLowestNum(...arr){
    if (Array.isArray(arr)) {
        arr=arr.sort();
        var secLowestNum = arr[1];
        var secLargestNum = arr[(arr.length - 1)];
        console.log(arr);
        console.log(secLowestNum);
        console.log(secLargestNum);
    }
    else{
        console.log("Please give an array");
    }
}
// findSecLargestAndLowestNum(3,2,1,5,4,9,7,8);