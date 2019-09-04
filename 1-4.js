// http를 활용하여 GET
var app = require('http');
var route = app.createServer();

route.listen(3000,()=>{
    console.log('web server is started with port 3000')
})

route.on('connection', (socket)=>{
    var addr = socket.address()    
    console.log('web client is connected %s:%d', addr.address, addr.port)
})

route.on('request', (request, response)=>{
    console.log('web client is requesting');
    console.log(request);
})