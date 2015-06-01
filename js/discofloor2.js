function calcPanels(windowHeight, windowWidth){	
	if(typeof(windowHeight)!="number" || typeof(windowWidth)!="number"){
		return "Error: Numbers expected as argument";
	}

	var requiredLength = windowWidth,
		noOfSquares = (typeof(numberOfSquaresOnLongestAxis) != 'number' ? 20 : numberOfSquaresOnLongestAxis);

	if(windowHeight > windowWidth){
		requiredLength = windowHeight;
	}

	return requiredLength/noOfSquares;		
}

function createElement(elementType, elementSize, identifier){

	var elementHeight = elementSize,
	elementWidth = elementSize,
	el = document.createElement(elementType);

	el.style.height = elementHeight+"px";
	el.style.width = elementWidth+"px";

	el.id = 'floor-panel-'+identifier;
	el.classList.add('floor-panel');

	return el;
}

function generateRandomColor(){
	var colors = [0,0,0], //rgb
		color = '';

	for (var i = colors.length - 1; i >= 0; i--) {
		colors[i] = Math.floor(Math.random()*256);
	};
	
	color = 'rgb('+ colors[0] + ', ' + colors[1] + ', ' + colors[2] + ')';
	return color;
}

function generateRandomPanel(numPanels){
	var panelID = Math.floor(Math.random()*numPanels),
		element;

	panelID = "floor-panel-" + panelID;
	element = document.getElementById(panelID);
	return element;
}

function changePanelColor(element, color){
	element.style.background = color;
}