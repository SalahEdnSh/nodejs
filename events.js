const EventEmitter = require('events');

const event1 = new EventEmitter();

event1.on('response', (par)=>{
  console.log('evented here, '+par)
})
event1.emit('response','parameter here')
