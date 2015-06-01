var numberOfSquaresOnLongestAxis = 10,
	setIntervalInterval = 25;

document.addEventListener('DOMContentLoaded', function(){

	var danceFloor = document.getElementsByClassName('floor-container')[0],
		danceFloorHeight = window.innerHeight,
		danceFloorWidth = window.innerWidth,
		panelSize = calcPanels(danceFloorHeight, danceFloorWidth),
		noSquaresY = Math.ceil(danceFloorHeight/panelSize),
		noSquaresX = Math.ceil(danceFloorWidth/panelSize),
		noSquares = noSquaresX * noSquaresY;

		for (var i = 0; i < noSquares; i++) {
			var el = createElement('div','panelSize', i);

			el.style.height = panelSize+"px";
			el.style.width = panelSize+"px";
			el.style.background = generateRandomColor();

			document.getElementById('floor-container').appendChild(el);
		};

	var intervalID = window.setInterval(function(){
		changePanelColor(generateRandomPanel(noSquares), generateRandomColor());		
	}, setIntervalInterval);

	var clearDiscoButton = document.getElementById('stopColorSwitcherButton'),
		restartDiscoButton = document.getElementById('startColorSwitcherButton');

	restartDiscoButton.addEventListener('click', function(event){
		event.preventDefault();
		intervalID = window.setInterval(function(){
			changePanelColor(generateRandomPanel(noSquares), generateRandomColor());		
		}, setIntervalInterval);
	})

	clearDiscoButton.addEventListener('click', function(event){
		event.preventDefault();
		clearInterval(intervalID);
	});

	
});

