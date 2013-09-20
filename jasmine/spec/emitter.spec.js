describe("EventEmitter", function(){
	var emitter, callback;

	beforeEach(function(){
		emitter = new EventEmitter();
	})

	it("trigger event", function(){
		var called = true;
		emitter.on("eventName", function(){
			called = true;
		});

		expect(called).toBeTruthy();
	})
})