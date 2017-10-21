function Elevator(){
	this.changingFloor = 0;
	this.newDestination = '';
	this.sequence = [];
	this.sequenceNum = 0;
	this.run = (elevator, floor, object, myEmitter) => {
		elevator.newDestination = floor;
		while(object.length > 0){
			if (elevator.newDestination > elevator.changingFloor){
				elevator.changingFloor++;
				elevator.sequence.push("Floor " + elevator.changingFloor)
			}
			if (elevator.newDestination == elevator.changingFloor){
				elevator.sequence.push(object[0].name + " has reached " + object[0].adjective +  " floor")
				object.splice(0, 1);
				if(object.length > 0){
					elevator.newDestination = object[0].destination
				}
			}
			if (elevator.newDestination < elevator.changingFloor){
				myEmitter.emit('down')
				elevator.sequence.push("Floor " + elevator.changingFloor)
			}
		}
	}
}

module.exports = new Elevator();