console.log("=> ", test.name);

function test(){
	console.log("=> ", anonymousFunc);
	console.log("=> ", namedFunction);

	var anonymousFunc = function(){ console.log("anonymousFunc"); }
	function namedFunction(){ console.log("namedFunction");	}
	var anonymousFunc2 = function IhaveNameInsideOnly(){ console.log(IhaveNameInsideOnly.name); }
	anonymousFunc2();

	//console.log(IhaveNameInsideOnly); ==> error
}

test();