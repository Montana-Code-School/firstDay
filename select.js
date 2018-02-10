var array = [1, 2, 3];
//we'll be working a lot with arrays. Let's look at them in a little depth.
//each "value" in an array is referred to as an element. The first element in the
//variable array is 1, the second is 2, and so forth. 
//to select an element in array, the syntax is
//array[indexOfElement]

//test it out by selecting the second element in "array" and logging it to the console. 

//it might be a little bizarre due to the zero indexing


var obj = {
  key1:"value1",
  key2:"value2"
 }
 
//We can select a value on an object using the dot syntax or square brakcets. 
//the syntax is like this: obj.key or obj["key"]

//Use the square bracket syntax to log the value of key1 in the obj. 
//Use the dot syntax to log the value of key2 in the obj.

//Lastly, let's work with for loops. 
//You can iterate over arrays with for loops (You can also iterate over objects with for loops, but the syntax is different)

//The syntax is as follows:
//for (var i = 0;i < array.length; i++){
  //code in loop goes here
 // }
 
//Look at the code inside the parenthesses. a for loop is broken into three parts, seperated by semicolons. 
//The first part is the initial value of the variable to iterate over - it starts at 0 in this case. The second (i < array.length)
//is the "conditional" which gets evaluated, and if it is evaluated to true, then the loop contines. The last
//part (i++) is the amount to iterate over, which in javascript means by 1. 
//So we are starting with a value 0, and as long as the value is less than the length of the array, run it, and each time
//increment the value by 1

//Make a for loop, iterating over the array, and console log each element. 
//Finally, change i to start at 1 and see the different.




  
