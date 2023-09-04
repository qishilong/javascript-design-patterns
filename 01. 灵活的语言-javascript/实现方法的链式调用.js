function MethodFather() {}
MethodFather.prototype = {
	sayHello() {
		console.log('hello');
		return this;
	},
	sayHi() {
		console.log('hi');
		return this;
	},
	sayThanks() {
		console.log('thanks');
		return this;
	},
};

const obj = new MethodFather();
obj.sayHello().sayHi().sayThanks();
