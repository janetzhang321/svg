var svg = document.getElementById("vimage");

var started = false;
var oldX = 0;
var oldY = 0;



var addDot = function(e){
	if (started) {
		console.log("started");
		var newDot = document.createElementNS( "http://www.w3.org/2000/svg", "circle");
		newDot.setAttribute("cx",e.offsetX);
		newDot.setAttribute("cy",e.offsetY);
		newDot.setAttribute("r","10");
		newDot.setAttribute("fill","goldenrod");
		
		document.getElementById("vimage").appendChild(newDot);
		
	}
	else {
		var newDot = document.createElementNS( "http://www.w3.org/2000/svg", "circle");
		newDot.setAttribute("cx",e.offsetX);
		newDot.setAttribute("cy",e.offsetY);
		newDot.setAttribute("r","10");
		newDot.setAttribute("fill","goldenrod");
		
		document.getElementById("vimage").appendChild(newDot);
		var oldX = e.offsetX;
		var oldY = e.offsetY;

		started = true;
	};


};


svg.addEventListener("click", addDot);
