var net = require('net'),
    date = new Date(),
    curtime = date.getFullYear();
if((date.getMonth()+1) < 10 )
    curtime = curtime + "-0" + (date.getMonth()+1);
else
    curtime = curtime + "-" +(date.getMonth()+1);

if((date.getDate()) < 10 )
    curtime = curtime + "-0" + (date.getDate());
else
    curtime = curtime + "-" +(date.getDate());

if((date.getHours()) < 10 )
    curtime = curtime + " 0" + (date.getHours());
else
    curtime = curtime + " " +(date.getHours());

if((date.getMinutes()) < 10 )
    curtime = curtime + ":0" + (date.getMinutes());
else
    curtime = curtime + ":" +(date.getMinutes());

curtime = curtime + "\n";
var server = net.createServer(function(socket) {
    socket.end(curtime);
});
server.listen(8000);