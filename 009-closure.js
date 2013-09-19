var  list = ["A","B","C"]
   , caller = []
   , caller2 = []
   , result = ""
;

for (var i = 0; i < list.length; i++) {
	// the "i" variable is passed as reference
	var getNumber = function(){
		return i; 
	}
	caller.push( getNumber );                   
	
	// the "i" variable, now, get inside a function scope and the value is preserved
	var getNumberFunctionScope = function(number){
		return function(){
			return number;
	  	};
	}
	caller2.push( getNumberFunctionScope(i) );  
};

result = "";
caller.forEach( function(item){ result += item() + " "; });
console.log(result); // 3 3 3

result = "";
caller2.forEach(function(item){ result += item() + " "; });
console.log(result); // 0 1 2
