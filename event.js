var EventEmmiter = require('events').EventEmitter;

var ee = new EventEmmiter();

ee.on('onData', function() {
  console.log('event 1');
});
ee.on('onData', function() {
  console.log('event 2');
});
ee.on('onData', function() {
  console.log('event 3');
});
ee.on('onData', function() {
  console.log('event 4');
});
ee.on('onData', function() {
  console.log('event 5');
});
ee.on('onData', function() {
  console.log('event 6');
});
ee.on('onData', function() {
  console.log('event 7');
});
ee.on('onData', function() {
  console.log('event 8');
});
ee.on('onData', function event9() {
  console.log('event 9');
});
ee.once('onData', function(event) {
  console.log('I am an once Listener', event);
});

// ee.removeAllListeners();
ee.emit('onData');
