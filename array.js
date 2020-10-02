/* Remove duplicate numbers in an array */
function removeDuplicates(arr){
	let uniqueArray = arr.filter((value, index) => arr.indexOf(value) === index);
	
	console.log(uniqueArray);
}

removeDuplicates([1, 1, 3, 5, 5, 8, 21, 21]);



