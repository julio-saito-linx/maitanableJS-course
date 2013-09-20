require("./spec_helper");

describe("EventEmitter specs", function(){
	var emitter, callback;

	beforeEach(function(){
		emitter = new EventEmitter();
		callback = jasmine.createSpy("callback spy")
	})

	it("trigger event", function(){
		emitter.on("eventName", callback);
		emitter.trigger("eventName");
		
		expect(callback).wasCalled();
	})

	it("trigger event with arguments", function(){
		emitter.on("eventName", callback);
		emitter.trigger("eventName", 1,2,3);
		
		expect(callback).wasCalledWith(1,2,3);
	})

	it("trigger event with arguments and context", function(){
		var context = {};
		emitter.on("eventName", callback, context);
		emitter.trigger("eventName", 1,2,3);
		
		expect(callback.calls[0].object).toEqual(context);
		expect(callback.mostRecentCall.object).toEqual(context);
	})

	it("trigger calls several callbacks", function(){
		emitter.on("eventName", callback);
		emitter.on("eventName", callback);
		emitter.on("eventName", callback);
		emitter.trigger("eventName");
		
		expect(callback.callCount).toEqual(3);
	})

	it("trigger calls diferents callbacks", function(){
		callback2 = jasmine.createSpy("callback spy 2")
		emitter.on("eventName", callback);
		emitter.on("eventName", callback2);
		emitter.trigger("eventName");
		
		expect(callback).wasCalled();
		expect(callback).wasCalled();
	})
})