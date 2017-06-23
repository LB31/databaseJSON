var http = require("http");
var url = require("url");

http.createServer(function(request, response){
    response.writeHead(200, {"Content-Type":"text/plain"});
    var params = url.parse(request.url,true).query;

    console.log(params);

    var datum = params.datum;
	var ordner = params.ordner;
    var bild = params.bild;
	var kommentar = params.kommentar;
	

fs = require('fs');
var parsedJson = JSON.parse(fs.readFileSync('../datenbank/chronik.json').toString());


parsedJson.push({Datum : datum, Ordner : ordner, Bild : bild, Kommentar : kommentar});
fs.writeFile('../datenbank/chronik.json', JSON.stringify(parsedJson));
	
	/*
    response.write(sum);
    response.end(); 
	*/
	
	
	
}).listen(10001);