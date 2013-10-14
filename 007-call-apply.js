function sayName(){
	console.log("name:", this.name, arguments);
}

var john = {name: "John"}
  , mary = {name: "Mary"}
;

sayName();
sayName.call (john, 1,2,3,4,5);   //arguments
sayName.apply(mary, [1,2,3,4,5]); //array

var johnName = sayName.bind(john); // $.proxy(sayName, john)
johnName();
johnName.call(mary); //ops

