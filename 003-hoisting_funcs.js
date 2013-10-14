function test(){
	var anonymousFunc = function(){ console.log("anonymousFunc"); }
	console.log('-->', anonymousFunc.name);

	function namedFunction(){ console.log("namedFunction");	}
	console.log('-->', namedFunction.name);
	
	var anonymousFunc2 = function IhaveNameInsideOnly(){ console.log('-->', IhaveNameInsideOnly.name); }
	anonymousFunc2();

	// ReferenceError: IhaveNameInsideOnly is not defined
	// console.log(IhaveNameInsideOnly); 
}

test();