var object = require('./people.js');
var elevator = require('./constructor.js')

var EventEmitter = require('events');
var myEmitter = new EventEmitter();

myEmitter.on('down', function(){
	elevator.changingFloor--;
});

myEmitter.on('up', function(floor){
	elevator.run(elevator, floor, object, myEmitter)
});

myEmitter.emit('up', object[0].destination);
var int = setInterval(function(){
	if(elevator.sequenceNum < elevator.sequence.length){
		console.log(elevator.sequence[elevator.sequenceNum])
		elevator.sequenceNum++;
	} else {
		console.log("All passengers have reached their floor")
		clearInterval(int)
	}
}, 1000)


