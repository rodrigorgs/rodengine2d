var Ball = PhysicsEntity.extend({
	sprite: "disco.png",
	size: {x: 32, y: 32},

	init: function() {
		this.body = GameManager.instance.physicsManager.addBody(this, {
			type: 'dynamic',
			size: {x: 64, y: 64},
			friction: 1.0,
			restitution: 0.8,
			density: 1.0,
		});
	},

	collided: function(other) {
		if (other instanceof Wall) {
			// this.shouldDestroy = true;
		}
	}

});
