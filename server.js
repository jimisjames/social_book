var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());

const server = app.listen(4200);
const io = require('socket.io')(server);

var path = require('path');
app.use(express.static(path.join(__dirname, './public/dist/public')));

require('./server/config/mongoose.js') //database and schemas

require('./server/config/routes.js')(app)   //routes

app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))   //internal routing
});

io.on('connection', (socket) => {

    console.log("********* win *************")

    socket.on('instantMessage', (data) => { 
        console.log(data)
        io.emit('instantMessage', data);
    });


    /* socket.on('disconnect', function () {
        let note = "Socket ID <span class='bold'>"+socket.id+"</span> has <span class='bold'>left</span> us!"
        io.emit('notification', note);
    }); */

});