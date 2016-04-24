//Part of the React Class I'm Taking...another calculator. sigh. This runs in terminal.

var readline = require('readline-sync');

var num1 = readline.question("Please enter a number \n: ");
var num2 = readline.question("Please enter another number \n: ");
var oper = readline.question("Please enter an operator (+,-,*,/)\n:");

function doMath (n1, n2) {
	var result = 0
    if (oper == "+") {
        result = parseInt(n1) +  parseInt(n2);
    } else if (oper == "-") {
        result = parseInt(n1) -  parseInt(n2);
    } else if (oper == "*") {
        result = parseInt(n1) *  parseInt(n2);
    } else if (oper == "/") {
        result = parseInt(n1) /  parseInt(n2);
    }
    return result;
}

console.log("Your result is: " + doMath(num1,num2));
