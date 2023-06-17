const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res)=>{
    res.end(fs.readFileSync('./hola.jpg'),'binary')

});

server.listen(3000, function(){
    console.log('Listening on 3000');
});