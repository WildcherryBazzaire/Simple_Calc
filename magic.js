var calculator = (x,y,z) => { //update: replaced function with arrow to see if it worked 
	
	x = x.toLowerCase(); // lower cases x/input
	
	switch(x) {
		case("multiply"): //case for multiply
		case("*"):
		{
			return y * z;
			break;
		}
		
		case("add"): //case for addition
		case("+"):
		{
			return y + z;
			break;
		}
		
		case("subtract"): //case for subtraction 
		case("-"):
		{	return y - z;
			break;
		}
		
		case("divide"): //case for division 
		case("/"):
		{
			return y / z;
			break;
		}
		
		case("power"): //case for power 
		case("**"):
		{
			return Math.pow(y,z);
			break;
		}
		default:
			return "error! run the program again" //defaults to error
	}
	
}
//where the Bus arrives

var array = [];

var inputMolecule = require('readline'); //interface for readable stream; note: require is built in for node to load in molecules, so it will not work for browsers

const calcInput = inputMolecule.createInterface({ //constucts a instance of Writable streams
	input: process.stdin,
	output: process.stdout,
	prompt: '>'
});

calcInput.setPrompt('operator: '); //sets intial prompt when starting
calcInput.prompt(); //prompts 

//bus is here; a.k.a magic
calcInput.on('line', (answer) => { //.on property works as a Eventlistener for this molecule. so whenever 'line'->enter or return key is pressed, the function with the parameter answer which hold the value of line, is executed 
	if(array.length == 0) { //pushes operator input to array
		array.push(answer); // => is equal to function(){} 
		calcInput.setPrompt('Value 1: '); //sets prompts value to enter Value 1
		calcInput.prompt();
	} else if(array.length == 1) {
		array.push(parseInt(answer)); //pushes value 1
		calcInput.setPrompt('Value 2: '); //sets prompts value to enter Value 2
		calcInput.prompt();
	} else if(array.length == 2) {
		array.push(parseInt(answer)); //pushes value 2
		calcInput.setPrompt('Sauce?: ') //sets prompt to sauce
		calcInput.prompt(); 
	} else {
		array.push(answer) 
		console.log("your result is: " + calculator(array[0],array[1],array[2]) + ' with ' + array[3] + ' ounces of Cranberry Sauce'); //returns the calculations
		calcInput.close(); // closes/exits the stream
	}
});
//https://nodejs.org/api/readline.html#readline_event_line to keep website in note