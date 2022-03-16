const express = require("express");
const path = require("path");
const id = 3000;
const app = express();
const publicPath = path.join(__dirname,"../","public");

app.use(express.static(publicPath));

app.listen(id, () => {
    console.log("Servidor en funcionamiento en el puerto "+ id);
});

app.get('/', function(req,res){
    res.sendFile(path.join(__dirname,"./views/home.html"));
});

app.get('/register', function(req,res){
    res.sendFile(path.join(__dirname,"./views/register.html"));
});

app.get('/login', function(req,res){
    res.sendFile(path.join(__dirname,"./views/login.html"));
});

app.get('/registrer/confirmer', function(req,res){
    res.sendFile(path.join(__dirname,"./views/login.html"));
});

