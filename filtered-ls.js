var fs = require('fs'),
    path = process.argv[2],
    extension = new RegExp("\\.(" + process.argv[3] + ")$");
fs.readdir(path, function(err, list){
    if(err){
        console.log('Error!!1');
        return;
    }
    var listsize = list.length,
        i = 0;
    for(;i < listsize; i++){
        var filename = list[i];
        if(extension.test(filename)){
            console.log( filename);
        }
    }
});