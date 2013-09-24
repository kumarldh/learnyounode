module.exports = filteredls;
function filteredls(path, extension, callback){
    var fs = require('fs'),
        extension = new RegExp("\\.(" + extension + ")$");

    fs.readdir(path, function(err, list){
        if(err){
            return callback(err);
        }
        var listsize = list.length,
            i = 0;
        for(;i < listsize; i++){
            var filename = list[i];
            if(extension.test(filename)){
                console.log(filename);
            }
        }
    });
}
