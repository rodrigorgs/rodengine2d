var InputManager = Class.extend({
	canvas: null,
	mousePos: {x: 0, y: 0},
	keyState: {},

	init: function(canvas) {
		this.canvas = canvas;

		var that = this;
		window.addEventListener("mousemove", function(e) {
			that.onMouseMove(e);
		});
		window.addEventListener("keydown", function(e) {
			that.onKeyDown(e);
		});
		window.addEventListener("keyup", function(e) {
			that.onKeyUp(e);
		});
		// mousemove
		// click
		// mousedown
		// mouseup

		// keydown
		// keyup
	},
	onMouseMove: function(e) {
		this.mousePos = {
			x: e.clientX - this.canvas.offsetLeft,
			y: e.clientY - this.canvas.offsetTop
		};
	},
	onKeyDown: function(e) {
		console.log(e.keyCode);
		this.keyState[e.keyCode] = true;
	},
	onKeyUp: function(e) {
		this.keyState[e.keyCode] = false;
	},
});
