Function.prototype.addMethods = function (name, fn) {
	if (typeof name === 'object') {
		for (const item in name) {
			this[item] = this[fn];
		}
	} else {
		this[name] = fn;
	}
	return this;
};

function fn() {}
fn.addMethods('checkName', function () {
	console.log('checkName');
	return this;
}).addMethods('checkAge', function () {
	console.log('checkAge');
	return this;
});

fn.checkName().checkAge();
