var User = function(name){
	// instance attribute
	this.name = name;
	
	User.increment();
}

// Class attribute
User.count = 0;
// Class method
User.increment = function(){
	this.count += 1;
}
// Instance method
User.prototype.getName = function(){
	return "My name is " + this.name;
}


var user = new User("Maria")
console.log(User, user, user.getName());

var user = new User("John")
console.log(User, user, user.getName());