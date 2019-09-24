//Code Your DNA!

//The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2nd array.

//Base pairs are a pair of AT and CG. Match the missing element to the provided character.

//Return the provided character as the first element in each array.

//For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

//The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.


//input:array with a string
//output:pairs of string with arrangement 
//tools:split() , for loops,conditional statements, .push(), 
//var with an empty array to store the arrays i will push
function pairElement(str) {
  //your code here
  function pairElement(str) {
    //your code here
    var output=[];
    var array=str.split("");
    for (var i = 0; i < array.length; i++){
    if (array[i]=== "A") {
      output.push(["A","T"]);
    } else if(array[i]=== "C") {
      output.push(["C","G"]);
    } else if(array[i]=== "T") {
      output.push(["T","A"]);
    } else if(array[i]=== "G") {
      output.push(["G","C"]);
    }
      
    }      
    return output;
  }
     var result= pairElement("AGCG");
     console.log(result);
  
  
}

pairElement("GCG");

//TEST CASES
//pairElement("ATCGA") should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
//pairElement("TTGAG") should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
//pairElement("CTCTA") should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]