console.log("this ==> ", this);
console.log("this.constructor ==> ", this.constructor);

var user = {
	firstName: "Julio",
	lastName: "Saito",
	name: function(){
		console.log("");
		console.log(this, this.firstName + " " + this.lastName);
	},
	self: function(){
		return this;
	}
}


console.log(user.self() === user);     // "this" is himself
setTimeout(user.name, 100);            // "this" is not himself
setTimeout(user.name.bind(user), 150); // bind forces to "this" to be himself

// bind() is not suported on old navigators. You have to use Augment.js or es5-shim
