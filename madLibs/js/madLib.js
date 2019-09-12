//Step 1:Users enter information and click the button

$(document).ready(function(){
function makeMadLib(){
    var noun= $("#noun").val();
    var adjective= $("#adjective").val();
    var personName= $("#person").val();
    $("#story").append("<p>" + personName + "really likes" + adjective + " " + noun+ "</p>");
 
    var userObject = {}; //a variable that has an Object that would stores the variables declared before
    userObject.noun= noun;
    userObject.adjective= adjective;
    userObject.person= personName; //create a key within the object with the value of the variables declared before
    console.log(userObject);
}

$("#lib-button").on("click",function(){
makeMadLib();

});
});

//Step2 : Create and event listener to be listening on the button,so that when the user clicks it, we can executea callback function jquery, use.on() for click event
//Step 3: Create a function that has 3 variables one for each of the words the user types in. Each of those variables will have the value of what the user typed in.- use jquery.val()method
//Step 4:Display the data in a sentence to the user jQuery.append() to the div in the HTML
//Step 5:Create a variable and initialize it/set it equal to empty curly brackets. Add 3key value pairs with dot notation


