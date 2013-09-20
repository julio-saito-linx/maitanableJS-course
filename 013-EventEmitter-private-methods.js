function EventEmitter(){
	var events = [];

	this.on  = function(event, callbackItem, context){
		events[event] = events[event] || [];
		events[event].push(context ? callbackItem.bind(context) : callbackItem);
	};

	this.trigger  = function(){
		var argsArray = [].slice.call(arguments);
		var selectedEvent = argsArray.shift();
		(events[selectedEvent] || []).forEach(function(callbackItem){
			callbackItem.apply(undefined, argsArray);
		});
	};
};

// ************************************************************************

var emitter = new EventEmitter(); //always create new function "on" and "trigger"
emitter.on("ready", function(a,b){
	console.log(a,b);
});
emitter.trigger("ready", "a", "b");

console.log(emitter.events); // not accessible

