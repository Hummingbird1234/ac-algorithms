/*

Given a number, insert dashes ('-') between each two odd numbers and return it as a string
Remember 0 is an even number. Assume the input will contain at least 1 digit.

Hint: Check out toString() method at
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString

*/

/**
Examples:

var result = dashInsert("454793");
console.log(result) // "4547-9-3"

var result = dashInsert("44");
console.log(result) // "44"

var result = dashInsert("0");
console.log(result) // "0"

var result = isBigger("13");
console.log(result) // "1-3"

**/

//input: a number
//output: a string, with dashes between the odd numbers
//create a variable the string
//create a variable to store the transformation od the number to an array of numbers, by first turning into a string, tools:.string().split("")
//create a for loop to go through each of the numbers in array
//need a conditional statement that test if the number is odd && if the number after it is odd
//if true , I want to add the number and the dash to the string
//if false, I want to just add the number 
	// Your code
	function dashes(num){
		var str = "";
		var arr = num.toString().split("");
	 
		for(i = 0; i < arr.length; i++){
			if(arr[i] % 2 === 1 && arr[i+1] % 2 === 1){
				str += arr[i] + '-';            
			}else{
				str += arr[i];
			}
		}
		// console.log(arr); to verify results
		// console.log(str); verify results
		return str;
	}
	
	
	var result= (dashes(11344746362));
	console.log(result);
