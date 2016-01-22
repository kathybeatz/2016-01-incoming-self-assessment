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
	function search(start, end){

		//if the starting index is greater than the ending index
		if(start > end){
			//the target is not found, so return a -1 
			return -1;
		//if the element at the starting index matches the target
		}if(array[start] === target){
			//return the starting index
			return start;
		//if the element at the ending index matches the target
		}if(array[end] === target){
			//return the ending index
			return end;
		}

		//Find the middle index
		var middle = Math.floor((start+end)/2);
		//Find the element at that middle index
		var middleElement = array[middle];

		//if the target is less than the middle element
		if(target < middleElement){
			//discard the second half of the array
			//alter the starting and ending search positions and call the search function again
			return search(start+1, middle);
		//if the target is greather than the middle element
		}else if(target > middleElement){
			//discard the first half the array
			//alater the starting and ending search positions and calle the search function again
			return search(middle, end-1);
		//if the target matches the middle element 
		}else{
			//return the middle index
			return middle;
		}
	}
	//call the search function with the original starting index (0) and ending index (array.length-1)
	return search(0, array.length-1);
	
};




