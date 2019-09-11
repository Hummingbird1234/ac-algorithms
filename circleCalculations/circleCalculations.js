//Write a JavaScript program to calculate the area and perimeter of a circle. The radius of the circle will be supplied by the user

//Bonus 1: Write the answer like this "The area of the circle is ___ and the perimeter of the circle is ____"

//Bonus 2: Make both numbers whole integers (aka round to the nearest integer) 

// Area and perimeter of circle with radius given
// input:radius:a number
// var calculated area
// var calculated perimeter
// Formula area=pi*r^2
// Formula perimeter=2*pi*r
// return statement that is the string with the variables
// output: area and perimeter

var area;
var perimeter;
function circleCalculation (radius) {
	//your code here
	area=Math.PI * radius * radius ;
	perimeter= Math.PI * 2 * radius;
	return "The area of the circle is " + area + " and the perimeter of the circle is " + perimeter;
}
circleCalculation(10);
console.log(perimeter);
console.log(area);
console.log(circleCalculation);