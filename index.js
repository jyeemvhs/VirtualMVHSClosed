
let express = require('express');
let path = require("path");


let app = express();
app.use('/', express.static('./'));


//req is info sending to server from client.
//res is info sending to client from server.
app.get("/",function(req,res) {
	res.sendFile(path.resolve(__dirname,"index.html"));
});


//below is a wrapper of http.createServer(requestHandler).listen(3000);
app.listen(3006,function() {
	console.log("started on port 3006");
});


