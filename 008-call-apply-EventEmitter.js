function EventEmitter(){
	this._events = [];  // only create at the new
};

// prototype: like "instance methods"
EventEmitter.prototype.on  = function(event, callbackItem, context){
	// get an empty array if does not exist
	this._events[event] = this._events[event] || [];
	// add new callbackItem
	this._events[event].push(context ? callbackItem.bind(context) : callbackItem);
};

EventEmitter.prototype.trigger  = function(){
	// arguments become an array
	var argsArray = [].slice.call(arguments);
	// first argument is the event
	var selectedEvent = argsArray.shift();

	(this._events[selectedEvent] || []).forEach(function(callbackItem){
		// apply each callbackItem from selectedEvent
		callbackItem.apply(undefined, argsArray);
	});
};


// ************************************************************************
// ************************************************************************


var emitter = new EventEmitter();

var myCallBack = function(first, second){
	console.log(first
			   ,second
			   ,this.fromContext); 
};

var myContext = {fromContext: "fromContext"};

emitter.on("ready", myCallBack);
emitter.on("ready", myCallBack, myContext);

emitter.trigger("ready", "a", "b");

