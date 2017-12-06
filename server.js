var http = require("http");
var server = http.createServer(function (req, res) {
    console.log(req.url);
    //we can also write the respond in html page
    res.write( "<html><body><h1>" +req.url+ "</h1></body></html>" );
    //after req arrived, http will keep responding until we end it
    res.end();
});
server.listen(3000);
//whatever you request in port 3000 , it will print in cli 
//ex: localhost:3000/thisis/fun  cli will print /thisis/fun
