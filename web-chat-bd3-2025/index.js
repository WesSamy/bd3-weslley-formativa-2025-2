const express = require("express");

const ejs = require("ejs");

const http = require("http");

const path = require("path");

const sochetIO = require("socket.io");
const { Socket } = require("dgram");

const app = express();

const server = http.createServer(app);

const io = sochetIO(server)

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'public'));

app.engine('html' , ejs.renderFile)

app.use('/' , (req, res)=>{
    res.render('index.html');
});

server.listen(3000, ()=>{
    console.log('SERVIDOR RODANDO EM - http://localhost:3000');
});

let messages = [];

//Flag vai determinar a ação
io.on('connection', socket =>{

    console.log('Id de usuário conectado: ' + socket.id);

    socket.emit('previousMessage', messages);

    socket.on('sendMessage', data=>{
        //a entrada atual será sempre a última (Pilha)
        messages.push(data);

        socket.broadcast.emit('receviedMessage', data);
    });

});