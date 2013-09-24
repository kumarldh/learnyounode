var http = require('http')
    uri = process.argv[2];
http.get(uri,function(request){
    request.on("data",function(data){
        console.log(data.toString());
    });
}).on("error",function(e){
    console.log("Error!!1 "+e.message);
});