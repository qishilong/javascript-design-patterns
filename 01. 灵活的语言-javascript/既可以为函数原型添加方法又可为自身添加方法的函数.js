Function.prototype.addMethods = function (name, fn) {
	if (typeof name === 'object') {
		for (const item in name) {
			this[item] = fn;
			this.prototype[item] = fn;
			return this;
		}
	} else {
		this[name] = fn;
		this.prototype[name] = fn;
		return this;
	}
};

const Methods = function () {};
// Methods.addMethods('sayHello', function () {
// 	console.log('hello');
// 	return this;
// }).addMethods('sayHi', function () {
// 	console.log('hi');
// 	return this;
// });
// Methods.sayHello().sayHi();

Methods.addMethods('sayHello', function () {
	console.log('hello');
}).addMethods('sayHi', function () {
	console.log('hi');
});
const methods = new Methods();
methods.sayHi();
