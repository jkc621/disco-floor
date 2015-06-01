QUnit.test('Length of Panels - calcPanels()', function(assert) {
	assert.equal(calcPanels(1000,800), 50), "1000,800";
	assert.equal(calcPanels(800,1200), 60), "800, 1200";
	assert.equal(calcPanels(1000,"hello"), "Error: Numbers expected as argument");
});

QUnit.test('Elements Created - createElement()', function(assert) {
	assert.equal(createElement('div', 50, 1).style.height, "50px");
	assert.equal(createElement('div', 0, 1).style.width, "0px");
	assert.equal(createElement('div', 10, 1).className, "floor-panel");
	assert.equal(createElement('div', 10, 1).id, "floor-panel-1");
});