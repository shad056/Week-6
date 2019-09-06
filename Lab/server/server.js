var express = require('express');
var app = express();
var path = require('path');
const http = require('http').Server(app);
const server = require('./listen.js');
const PORT = 3000;
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
const io = require('socket.io')(http);
const sockets = require('./socket.js');
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});
app.use(express.static(path.join(__dirname + '../dist/lab/')));
sockets.connect(io,PORT);
server.listen(http,PORT);
require('./routes/accountroute.js')(app,path);
require('./routes/authenticationroute.js')(app,bodyParser);


