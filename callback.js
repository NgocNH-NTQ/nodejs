var fs = require('fs');

// var data = fs.readFileSync('text.txt');

// console.log(data.toString());
// console.log('End');

fs.readFile('text.txt', function(err, data) {
	if (err) {
		console.log('error', err);
		return;
	}

	console.log(data.toString());
});

console.log('end');