var Bomb = SimpleEntity.extend({
	counter: 100,
	sprite: "8framewalk1.gif",
	size: {x: 32, y: 32},

	init: function() {
		this._super();
	},
	update: function() {
		var input = GameManager.instance.inputManager;
		this.setPos(input.mousePos);

		this.counter--;
		if (this.counter <= 0) {
			// this.shouldDestroy = true;
		}

		this._super();
	},
	collided: function() {
		//
	}
});