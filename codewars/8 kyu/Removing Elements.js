// DESCRIPTION:
// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.
// Example:
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]
// None of the arrays will be empty, so you don't have to worry about that!



// SOLUTION:

let arr1 = [1,   2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
let arr2 = ["k","b","v","x","7","e","4","g","b","0","s","n","m","3","q","k","u","4","6","d","z","j","z"];

function removeEveryOther(array) {
    return array.filter((item,index)=>!(index%2))   
};


console.log (removeEveryOther(arr1));
console.log (removeEveryOther(arr2));





