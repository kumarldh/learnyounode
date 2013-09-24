var fs = require('fs');
fs.readFile(process.argv[2], function(err, data){
    if(err){
        console.log('Error!!1');
        return;
    }
    console.log(data.toString().split("\n").length);
});