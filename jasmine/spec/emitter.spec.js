describe("EventEmitter", function(){
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
})