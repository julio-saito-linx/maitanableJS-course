var user = {
	  firstName: ""
	, lastName: ""
	, get name(){
		return this.firstName + " " + this.lastName;
	}
	, set name(name){
		var parts = name.split(" ");
		this.firstName = parts[0];
		this.lastName = parts[1];
	}
}

user.name = "Julio Saito"
console.log(user.name); 
