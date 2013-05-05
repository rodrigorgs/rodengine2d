Vec2 = Box2D.Common.Math.b2Vec2;
BodyDef =  Box2D.Dynamics.b2BodyDef;
Body =  Box2D.Dynamics.b2Body;
FixtureDef =  Box2D.Dynamics.b2FixtureDef;
Fixture =  Box2D.Dynamics.b2Fixture;
World =  Box2D.Dynamics.b2World;
MassData = Box2D.Collision.Shapes.b2MassData;
PolygonShape =  Box2D.Collision.Shapes.b2PolygonShape;
CircleShape = Box2D.Collision.Shapes.b2CircleShape;
DebugDraw =  Box2D.Dynamics.b2DebugDraw;
RevoluteJointDef =  Box2D.Dynamics.Joints.b2RevoluteJointDef;
ContactListener = Box2D.Dynamics.b2ContactListener;

var PHYSICS_SCALE = 20;

var PhysicsManager = Class.extend({
	world: null,
	iterationSeconds: null,

	init: function(fps) {
		this.world = new World(new Vec2(0, 9.8), false);
		this.iterationSeconds = 1.0 / fps;

		var listener = new ContactListener();
		listener.BeginContact = function(contact) {
			var a = contact.GetFixtureA().GetBody().GetUserData();
			var b = contact.GetFixtureB().GetBody().GetUserData();
			
			a.collided(b);
			b.collided(a);
		};
		this.world.SetContactListener(listener);
	},
	removeEntity: function(entity) {
		console.log("entity.body = " + entity.body);
		this.world.DestroyBody(entity.body);
	},
	addBody: function(entity, attributes) {
		// body
		var bodyDef = new BodyDef();
		bodyDef.fixedRotation = attributes.fixedRotation;
		bodyDef.bullet = attributes.bullet;
		bodyDef.userData = entity;
		if (attributes.type) {
			bodyDef.type = (attributes.type == 'static' ? 
				Body.b2_staticBody : 
				Body.b2_dynamicBody);
		}

		// shape
		var shape = new PolygonShape();
		shape.SetAsBox((1.0 / PHYSICS_SCALE) * attributes.size.x / 2, 
			(1.0 / PHYSICS_SCALE) * attributes.size.y / 2);

		// fixture		
		var fixtureDef = new FixtureDef();
		fixtureDef.shape = shape;
		fixtureDef.density = attributes.density;
		fixtureDef.friction = attributes.friction;
		fixtureDef.restitution = attributes.restitution;
		fixtureDef.isSensor = attributes.isSensor;

		// add to world
		var body = this.world.CreateBody(bodyDef);
		body.CreateFixture(fixtureDef);

		return body;
	},
	update: function() {
		this.world.Step(this.iterationSeconds, 8, 3);
	}
});