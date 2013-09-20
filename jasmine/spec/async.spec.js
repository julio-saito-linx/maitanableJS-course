describe("Async specs", function(){
	it("timeout after some time amount", function(){
		var getTimeoutMs = function(){
			var timeout = (Math.floor(Math.random() * 5) + 1) * 100;
			console.log("timeout:", timeout);
			return timeout;
		};

		var count = 0;


		runs(function(){
			setTimeout(function(){
				count += 1;
			}, getTimeoutMs());

			setTimeout(function(){
				count += 1;
			}, getTimeoutMs());

			setTimeout(function(){
				count += 1;
			}, getTimeoutMs());
		});

		waitsFor(function(){
			return count === 3;
		}, "too much time has gone", 1500);
	});
})