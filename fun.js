//let's take a look at functions

//there's two ways to "declare" a function (there's more ways, but we'll get to those later)

//var functionName = function(args){
  
//}

//function barf(args){
  
//}

//The first way is called a function declaration, and the second is a function expression
//I'd recommend the first way, there is a minor difference in how javascript parses the two
//and the first way is more straightforward IMO

//the args is what you "pass" into a function, and that allows us to generalize functions
//to multiple contexts, where your args could be seen as the context

//to "call" a function, you write the name of the function, followed by parenthesees, where the arguments fit inside the parenthesees
//like this: function(args)

var num1 = 2;
var num2 = 4;

var sumFn = function(){
  console.log(arg1 + arg2);
}

//modify the sumFn above to make it work by passing in arg1 and arg2, then call it, hopefully seeing the sum of 2 and 4 in the console
//create two more variables, num3 and num4 (give them values of w/e you want, you probably want them to be numbers), and 
//pass those into your sumFn.

//Lastly, modify your sum function to make the line below work. You'll use the "return" keyword. You might need to look it up.

console.log(sumFn(3, 4));
