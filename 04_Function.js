
// Todo: Functions: is a block of code designed to perform a particular task, is executed when invokes it or calls it

// Todo: 1: Function declaration

// Todo: Function syntax

/*
Function is defined with the: 

1: function keyword, followed by a name, followed by paraenthese(), the parantheses may include parameters names seperated by comma(para1,para2,...)

2: the code to be executed by the function is placed inside curly brackets{...}

function functionName(para1){
  please add 2 and 5 like this
}

*/

// Todo: function definition

function toCelsius(fahrenheit) {
  return (5/9) * (fahrenheit - 32 )
}
let callFunction = toCelsius(77);

// Todo: Explanation

/*
1: toCelsius : is the function name

2: fahrenheit: is the parameter of the function,the parameter is the value passed to the function when defining a function

3: Return: when javaScript reaches a "return" statement, the function will stop executing. If the function was invoked(calling) from a statement, javaScript will "return" to execute the code after invoking statement. Functions are often compute a return value. The return value is "returned" back to the caller.

4: toCelsius(): is used to call the function, in the parantheses we passed something that is called arguments.

5: Arguments: is the value passed when invoking(calling) the function

6: callFunction: is a variable that holds the value of function, it helps us to print the functio.
*/


// Todo: 2: Function Expression: can be stored in a variabel

// Todo: syntax

/* let varaibleName = function () {
    Code to be executed
} 
*/

// Todo: Concept of function Expression

/*
after a function expression has been stored in a variable, the variable can be used as a function.

The expression function function also called anonymous function(a function without a name).

This function ends with semicolon(;) because it is a part of an executable statement
*/

let functioExpression = function () {
console.log("Function Expression");
}
console.log(functioExpression());


// Todo: 3: Arrow Function

/*
Arrow functions allows a short syntax for writting function expression.

You don`t need the function keyword, the return keyword and the curly brackets.

Arrow functions are not hoisted. They must be defined before they are used.

Arrow functions do not have their own "This". They are not well suited for defining object methods.

*/

// Todo: smple1: Expression Function
var Expression = function() {
  console.log('Expression');
}
Expression()

// Todo: sample1: Arrow Function
var Expression = () => console.log('Arrow');
Expression()


// Todo: smple2: Expression Function
var AddNumbers = function () {
  let x =  5 + 6
  console.log(x);
  return x
}
AddNumbers()

// Todo: sample2: Arrow Function
var AddNumbers = () => {
  let x =  5 + 6
  console.log(x);
  return x
};
AddNumbers()



// Todo: Parameters and Arguments

// Parameters: are the names listed in the function defintion

// Arguments: are the real values passed to (and received by) the function

// Todo: Default Parameter

/*
 if a function is called with missing arguments(less than declared), the missing values are set to undefined.

 Sometimes this is acceptable, but sometimes it is better to assign a default value to the parameter
 */

function fun(x,y) {
  if (y === undefined) {
     y = 5
  }
  return x + y
}
console.log(fun(9));  // returns 14 ==> 9 + 5

function defaultParameter(x, y = 7) {
  return x - y
}
console.log(defaultParameter(12));   // returns 5 ===> 12 - 7



// Todo: Rest Parameter

/*
The rest Paremeter(...) allows a function to treat an indefinite number of arguments as an array
*/

function sum(...numbers) {
  let sum = 0;
  for (let  arg of numbers)
    sum += arg;
  return sum
}
let g = sum(1, 2, 3, 4, 5, 6, 7, 8, 9)
console.log(g);


// Todo: The Arguments Object

/*
JavaScript functions have a built-in object called the arguments object.

The argument object contains an array of the arguments used when the fnction was called.

This way you can simply use a function to find(for instance) the highest value in a list of numbers.

If a function is called with too many arguments(more than declared), these arguments can be reached using the arguments object.

If a function changes an argument`s value, it does ot change the parameter`s original value. 
*/

let j = findMax(1, 10, 30, 20, 60, 75, 40);

function findMax() {
  let max = -Infinity;
  for (let i = 0; i < arguments.length; i++){
    if (arguments[i] > max) {
      max = arguments[i]
    }
  }
  return max
}
console.log(j);


 




