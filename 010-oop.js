var User = function(name, age){
	this.name = name;
	this.age = age;
}
console.log(new User("Mario Alterto", 37));
console.log(User("Mario Alterto", 37)); //undefined

var User = function(name, age){
	if(!(this instanceof User)){
		return new User(name, age);
	}
	this.name = name;
	this.age = age;
}
console.log(User("Mario Alterto", 37)); // OK

