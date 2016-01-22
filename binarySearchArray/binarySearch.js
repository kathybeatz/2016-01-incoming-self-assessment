/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // [3]
 */


//Binary search reduces the search space by half with each comparison


//function should take in a sorted array and a target (element you are looking for)
var binarySearch = function (array, target) {

	//need to be able to manipulate the section we are searching 
	//search function should take in a starting position (index) and an ending position (index)
		//if the starting index is greater than the ending index
			//the target is not found, so return a -1 
		//if the element at the starting index matches the target
			//return the starting index
		//if the element at the ending index matches the target
			//return the ending index
		//Find the middle index
		//Find the element at that middle index
		//if the target is less than the middle element
			//discard the second half of the array
			//alter the starting and ending search positions and call the search function again
		//if the target is greather than the middle element
			//discard the first half the array
			//alater the starting and ending search positions and calle the search function again
		//if the target matches the middle element 
			//return the middle index
	//call the search function with the original starting index (0) and ending index (array.length-1)

};



