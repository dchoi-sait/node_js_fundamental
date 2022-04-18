const EventEmiiter = require('events');

//Create class
class mEmitter extends EventEmiiter {}

// Init object
const mEmitter = new mEmitter();

// Event listener
mEmitter.on('event', () => console.log('event fired'));

// Init event
mEmitter.emit('event');