const Twitter = require('twitter');
const request = require('request');

function main(args) {

	return new Promise( (resolve, reject) => {

		let client = new Twitter(require('./config.js'));

		if (args.success == true) {
			client.post('statuses/update', {status: args.message}, function(err, tweet, response) {
	            if(err) reject(err);
	            resolve({result:tweet});
	        });
		} else {
			reject("function to parse message from commit failed.")
		}
	});
}

exports.main = main;
