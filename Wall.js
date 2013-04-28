var Wall = PhysicsEntity.extend({
	sprite: "wood-horizontal.png",

	init: function() {
		this.body = GameManager.instance.physicsManager.addBody(this, {
			type: 'static',
			size: {x: 94, y: 32}
		});
	}

});
