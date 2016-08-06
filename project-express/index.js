var express = require('express');
var app     = express();
var data    = [];

// 1 - não esta pronto
// 0 - esta pronto

//http://localhost:3000/TesteTarefa/0
app.post('/create/:name/:done', function(request, response) {
  var obj = {
    name: request.params.name,
    done: request.params.done
  };

  data.push(obj);

  return response.status(200)
                 .json({
                  status : true,
                  message: 'You data has been created',
                  data   : obj
                });
});

app.get('/', function(request, response) {
  return response.status(200)
                 .json(data);
});

app.listen(3000, function() {
  console.log('The server has been started...');
});