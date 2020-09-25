/* Remove duplicate numbers in an array */

let array = [1, 1, 3, 5, 5, 8, 21,21]
let uniqueArray = array.filter((value, index) => array.indexOf(value) === index);

console.log(uniqueArray);