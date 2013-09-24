var my_module = require('./filteredls.js');
my_module( process.argv[2], process.argv[3], function(err){
	console.log(err);
});
