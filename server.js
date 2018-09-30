var http = require("http");

function start() {

    function onRequest(request, response) {
        console.log('request received.');
        response.writeHead(200, {'Content-Type": "text/plain'});
        response.write("Hello Alchemy and world");
        response.end();
    }

    http.createServer(onRequest).listen(1234);
    console.log('Server has started.');
}

exports.start = start;
// start page 23/54 //