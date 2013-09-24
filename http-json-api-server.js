var http = require('http'),
    url = require('url');
var server = http.createServer(function (req, res){
    var parsed_url = url.parse(req.url, true),
        query_obj = parsed_url.query,
        out_obj = {};
    if(parsed_url.pathname === '/api/parsetime'){
        if(query_obj.iso !== undefined){
            var d = new Date(query_obj.iso);
            out_obj.hour = d.getHours();
            out_obj.minute = d.getMinutes();
            out_obj.second = d.getSeconds();
        }
    }else if(parsed_url.pathname === '/api/unixtime'){
        if(query_obj.iso !== undefined){
            out_obj.unixtime = new Date(query_obj.iso).getTime();
        }
    }
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(out_obj));
}).on('error', function(err) {
       console.log(err.message);
    });;
server.listen(8000);