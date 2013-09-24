var http = require('http');
function get_dat_from(uri){
    var data_out = '';
    http.get(uri, function(request) {
        request.on("data", function(data) {
            data_out = data_out + data.toString();
        }).on("end", function() {
            console.log(data_out);
        });
    });

}
get_dat_from(process.argv[2]); 
get_dat_from(process.argv[3]); 
get_dat_from(process.argv[4]); 