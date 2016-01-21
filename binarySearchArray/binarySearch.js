/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // [3]
 */

//function should take in an array and a target (what you are looking for)
var binarySearch = function (array, target) {
	//create a results container to hold each index that the target is found at
	var results = [];
	//iterate through the array
	for(var i = 0; i < array.length; i++){
		//check the target against each item in the array
		if(array[i] === target){
			//if found, push the index at where it was found in the results container
			results.push(i);
		}
	}
	//return the results container
	return results;
};