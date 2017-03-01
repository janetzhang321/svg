var svg = document.getElementById("vimage");
var cb = document.getElementById("clear");

var started = false;
var oldX = 0;
var oldY = 0;



var addDot = function(e){
	if (started) {
		console.log(started);
		console.log(oldX,oldY);
		var newDot = document.createElementNS( "http://www.w3.org/2000/svg", "circle");
		newDot.setAttribute("cx",e.offsetX);
		newDot.setAttribute("cy",e.offsetY);
		newDot.setAttribute("r","10");
		newDot.setAttribute("fill","goldenrod");
		

		var newLine = document.createElementNS( "http://www.w3.org/2000/svg", "line");
		newLine.setAttribute("x1",e.offsetX);
		newLine.setAttribute("y1",e.offsetY);
		newLine.setAttribute("x2",oldX);
		newLine.setAttribute("y2",oldY);
		newLine.setAttribute("stroke","black");

		
		document.getElementById("vimage").appendChild(newDot);
		document.getElementById("vimage").appendChild(newLine);
		oldX = e.offsetX;
		oldY = e.offsetY;

	}
	else {
		console.log(started);
		var newDot = document.createElementNS( "http://www.w3.org/2000/svg", "circle");
		newDot.setAttribute("cx",e.offsetX);
		newDot.setAttribute("cy",e.offsetY);
		newDot.setAttribute("r","10");
		newDot.setAttribute("fill","goldenrod");
		
		document.getElementById("vimage").appendChild(newDot);
		oldX = e.offsetX;
		oldY = e.offsetY;
		console.log(oldX,oldY);

		started = true;
	};


};

var clearSVG = function(){
	while (svg.lastChild) {
		svg.removeChild(svg.lastChild);
	};
	started = false;

};


cb.addEventListener("click",clearSVG);
svg.addEventListener("click", addDot);
