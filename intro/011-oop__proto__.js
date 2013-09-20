// Object.create
var parentObject = {
						name:"John"
					   ,sayName: function(){
						        	return "My name is " + this.name; 
						          }
					};

var user = Object.create(parentObject);
console.log("user.__proto__ === parentObject?", user.__proto__ === parentObject);


// new: constructor function
var User = function(name){
	//instance attributes
	this.name = name;
	this.copiedMethod = function(){}
}

var user2 = new User("Stuart");
console.log("user2.__proto__ === User.prototype?", user2.__proto__ === User.prototype);
console.log("copiedMethod has same reference?", user2.copiedMethod === User.prototype.copiedMethod);

// the extentedMethod is shared by all instances, more efficient
User.prototype.extentedMethod = function(){};
console.log("extentedMethod has the same reference?", user2.extentedMethod === User.prototype.extentedMethod);
