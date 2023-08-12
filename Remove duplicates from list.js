
let arr = [1,2,3,3,4,4,4,4,5]

function distinct (a) {
    let uniq = [...new Set (a)];
    return uniq
}


let test = distinct (arr);
console.log(test);