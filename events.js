var events = require('events');

var eventEmitter = new events.EventEmitter();

eventEmitter.on('receive-data', function() {
	console.log('receive data successfully');
});

var connectCallback = function() {
	console.log('connect successfully');

	eventEmitter.emit('receive-data');
};

var listener1 = function() {
	console.log('listener1');
};

var listener2 = function() {
	console.log('listener2');
};

eventEmitter.addListener('connect', listener1);
eventEmitter.addListener('connect', listener2);
eventEmitter.on('connect', connectCallback);

eventEmitter.emit('connect');

console.log('End');