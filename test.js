var http = require('http');
var EventEmitter = require('events').EventEmitter;

function handleRequest(request, response) {
  response.writeHead(200, {
    'Content-Type': 'text/plain'
  });

  var count = 2 + 2;

  response.end('The value of count is => '.concat(count));
}

var server = http.createServer(handleRequest);
var ee = new EventEmitter();

server.on('connection', function(client) {

  ee.emit('newConnection', {
    num1: 10,
    num2: 5
  });

  console.log('There is a new connection!!'.concat(client.remoteAddress));
});

ee.on('newConnection', function(data) {
  console.log('Hey, I am a new event registered by event connection from Http module');

  var count = parseInt(data.num1) + parseInt(data.num2);

  console.log('Result of count equals => ', count);
});

server.listen(3000, '127.0.0.1');
