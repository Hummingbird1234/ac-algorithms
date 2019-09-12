/*
Given two numbers, a, b, as inputs, return true if a > b,
return false if a < b, return 0 otherwise.

Bonus 1: If a or b is undefined or not a number, then return -1.
Hint: Chekout typeof() operator at
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof

*/

/**
Examples:

var result = isBigger(3,4);
console.log(result) // false

var result = isBigger(13,4);
console.log(result) // true

var result = isBigger(4.00001,4);
console.log(result) // true

var result = isBigger(4,4);
console.log(result) // 0

var result = isBigger("potato",4);
console.log(result) // -1

var result = isBigger("4",4);
console.log(result) // -1

var result = isBigger(3);
console.log(result) // -1

var result = isBigger();
console.log(result) // -1

**/
//Input: 2 numbers(hopefully)
//Output: either a boolean, 0 or -1
//Step 1: We need to test if a is grater than b, conditional statement
//Step 2: Need tp create a return statement if a is greater than b, returns true
//Step 3 : Need to make a condition if a is less than b
//Step 4: Test if the two numbers are equal, else block that would return 0
//Step 5 : Create a condition that tests to see if a and b are both numbers. If they are proceed with steps 1-4. If not, return -1. Conditional statement that wraps around our conditional statements in steps 1-4. And we will need  a logical operator:&& typeof to check if the inputs are actually numbers

function isBigger(a, b) {
	
	if (typeof (a && b) === "number"){
		if(a > b){

			return true;
		
		}else if(a < b){

			return false;
		
		}else {

			return 0;
		}

 	}else{

		return -1;
	}
}

var result = isBigger(3,"a");

console.log(result);
	