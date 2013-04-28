var Player = SimpleEntity.extend({
	sprite: "8framewalk1.gif",
	size: {x: 32, y: 32},

	init: function() {
	},
	update: function() {
		var input = GameManager.instance.inputManager;

		var vx = 0, vy = 0;
		if (input.keyState[37])
			vx--;
		if (input.keyState[39])
			vx++;
		if (input.keyState[38])
			vy--;
		if (input.keyState[40])
			vy++;

		this.setVel({x: vx, y: vy});

		this._super();
	},
	collided: function() {
		this.shouldDestroy = true;
	}
});