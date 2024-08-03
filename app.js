const port = 3000; 
var express = require('express'), 
    app = express(); 
var bodyParser = require('body-parser'); 

app.use(express.static(__dirname + '/public')); 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function(req, res){ 
   // res.render('form'); 
   // res.sendFile(__dirname + '/form.html'); 
    res.sendFile("index.html"); 
}); 

app.post('/',function(req,res){ 
    var geo = req.body.loc; 
    var htmlData = geo;             
    //res.send(htmlData);     
    console.log("Coordinates: " + "\x1b[32m",  htmlData); 
}); 
    app.listen(port);
    console.log('Server running at port ',port);
