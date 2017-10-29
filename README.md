# Node - Event Elevator

<strong>Goal</strong>
*Develop a Node.js program that uses event emitters and callbacks to simulate elevator operations.

<strong>Assignment</strong>
* Congrats! You got awarded a contract for designing the elevator software for the new apartment building down the street. Clearly you need to apply your newfound Node.js skills to the test with this job!
* You should create an elevator emitter that can safely move the tenants in this example set of data from the first floor.

<strong>Example Object</strong>
```
var obj = [
	{
		name: "Jared",
		floor: 12
	},
	{
		name: "PJ",
		floor: 3
	}
]
```

<strong>Specs:</strong>
* Add an event listener for ```up``` that increments the current floor. The ```up``` listener should also receive a passenger argument.
* If the current floor is less than the passenger's destination, wait one second and emit the ```up``` event again.
* If the current floor is equal to the destination, remove the ```up``` listener, add a ```down``` listener, and manually emit a ```down``` event. The
```down``` listener receives no arguments.
* If the current floor is greater than 1, wait one second and emit the
```down``` event again.
* If the floor equals 1, remove the ```down``` listener and add the ```up``` listener. Remove one of the waiting people in the lobby and have them ride the elevator to their destination, and manually emit an ```up``` event.
* Start with the floor of the elevator equaling 1, and manually emitting a ```down``` event
* Repeat until there is no one left in the lobby.

<strong>TIP</strong><br>
Remember to console.log everything; the current floor, who's on the elevator, or the direction the elevator is going (the kind of listener on it). This will help you keep track of what's going on at every step of your program.