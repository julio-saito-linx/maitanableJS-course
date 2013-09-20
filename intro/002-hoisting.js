// order of javascript recognition
// -------------------------------
// reserverd words: this, for, arguments
// function arguments
// function declaration
// variable declarations


function myFunction(hello){
	// hoisting
	// var hello3;

	console.log(hello);
	console.log(hello2);
	console.log(hello3);

	if(false){
		var hello3 = "hello3 inside false if block that is not executed"
	}
}

var hello = "hello1 from global"
var hello2 = "hello2 from global"

myFunction("hello from arguments");