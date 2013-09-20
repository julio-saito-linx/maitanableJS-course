function EventEmitter(){
	this._events = [];
};

EventEmitter.prototype.on  = function(event, callbackItem, context){
	this._events[event] = this._events[event] || [];
	this._events[event].push(context ? callbackItem.bind(context) : callbackItem);
};

EventEmitter.prototype.trigger  = function(){
	var argsArray = [].slice.call(arguments);
	var selectedEvent = argsArray.shift();

	(this._events[selectedEvent] || []).forEach(function(callbackItem){
		callbackItem.apply(undefined, argsArray);
	});
};


