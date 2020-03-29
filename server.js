var http = require('http');
var url = require('url');

function startserver(route,handle) {
    function onRequest(request,response){
        var pathname = url.parse(request.url).pathname;
        var contactData="";
        console.log("A routing request received for "+pathname);
        request.setEncoding("utf8");
        request.addListener("data",function(chunk) {
        contactData =+ chunk;
        });
        request.addListener("end",function () {
            route(handle,pathname,response,contactData);
        });
        
        
    }
    http.createServer(onRequest).listen(8080);
    console.log("Server started at port 8080");
}
exports.startserver = startserver;
