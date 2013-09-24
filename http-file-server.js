var http = require('http'),
    fs = require('fs');
var server = http.createServer(function (req, res) {
  var filename = process.argv[2],
    readstream = fs.createReadStream(filename);
    readstream.on("open", function(){
        readstream.pipe(res);
    });
})
server.listen(8000);
