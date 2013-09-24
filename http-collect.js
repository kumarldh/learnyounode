var http = require('http')
    uri = process.argv[2],
    data_received = '',
    data_received_length = 0;
http.get(uri,function(request){
    request.on("data",function(data){
        data_received = data_received + data.toString();
    });
    request.on("end",function(data){
        console.log(data_received.length);
        console.log(data_received);
    });
}).on("error",function(e){
    data_received = data_received +e.message;
});