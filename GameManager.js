var GameManager = Class.extend({
	entities: [],
	renderManager: null,
	inputManager: null,
	physicsManager: null,
	debugPhysics: false,

	init: function(canvas, debugPhysics) {
		this.renderManager = new RenderManager(canvas);
		this.inputManager = new InputManager(canvas);
		this.physicsManager = new PhysicsManager(60.0);

		if (debugPhysics) {
			this.debugPhysics = true;
			var b2DebugDraw = Box2D.Dynamics.b2DebugDraw;
			var debugDraw = new b2DebugDraw();
			debugDraw.SetSprite(canvas.getContext("2d"));
			debugDraw.SetDrawScale(1.0);
			debugDraw.SetFillAlpha(0.3);
			debugDraw.SetLineThickness(1.0);
			debugDraw.SetFlags(b2DebugDraw.e_shapeBit | b2DebugDraw.e_jointBit);
			this.physicsManager.world.SetDebugDraw(debugDraw);
		}

		GameManager.instance = this;
	},

	addEntity: function(entity) {
		this.entities.push(entity);
	},

	update: function() {
		this.physicsManager.update();
		// check collisions
		for (var i = 0; i < this.entities.length; i++) {
			var entityA = this.entities[i];
			if (!(entityA instanceof SimpleEntity))
				continue;

			for (var j = i + 1; j < this.entities.length; j++) {
				var entityB = this.entities[j];
				if (!(entityB instanceof SimpleEntity))
					continue;

				var a = entityA.getPos();
				var b = entityB.getPos();
				var width = (entityA.size.x + entityB.size.x) / 2;
				var height = (entityA.size.y + entityB.size.y) / 2;

				// console.log(entityA);
				// alert();

				// console.log("check collision of simple entities");
				var collided = (Math.abs(a.x - b.x) < width 
					&& Math.abs(a.y - b.y) < height);
				
				if (collided) {
					entityA.collided(entityB);
					entityB.collided(entityA);
				}
			}
		}
		// update
		for (var i = 0; i < this.entities.length; i++) {
			var entity = this.entities[i];
			if (!entity.shouldDestroy) {
				entity.update();
			}
		}

		for (var i = this.entities.length - 1; i >= 0; i--) {
			var entity = this.entities[i];
			if (entity.shouldDestroy) {
				if (entity instanceof PhysicsEntity) {
					this.physicsManager.removeEntity(entity);
				}
				this.entities.splice(i, 1);
			}
		}
	},

	draw: function() {
		this.renderManager.beginDraw();

		if (this.debugPhysics) 
			this.physicsManager.world.DrawDebugData();

		for (var i = 0; i < this.entities.length; i++) {
			var entity = this.entities[i];
			this.renderManager.drawEntity(entity);
		}

		
	}
});