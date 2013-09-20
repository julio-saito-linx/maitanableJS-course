function sayName(){
	console.log("my name is " + this.name);
}

var john = {name: "John"}
  , mary = {name: "Mary"}
;

sayName()
sayName.call (john, 1,2,3,4,5)   //arguments
sayName.apply(mary, [1,2,3,4,5]) //array

var johnName = sayName.bind(john); // $.proxy(sayName, john)
johnName();
johnName.call(mary); //ops

