var  list = ["A","B","C"]
   , caller = []
   , caller2 = []
   , result = ""
;

for (var i = 0; i < list.length; i++) {
	// the "i" variable is passed as reference
	caller.push(function(){
		return i; 
	});                   
	
	// the "i" variable, now, get inside a function scope and the value is preserved
	caller2.push( function(number){
				 	return function(){ return number; }; 
				  }(i)
				);
};

result = "";
caller.forEach( function(item){ result += item() + " "; });
console.log(result); // 3 3 3

result = "";
caller2.forEach(function(item){ result += item() + " "; });
console.log(result); // 0 1 2
