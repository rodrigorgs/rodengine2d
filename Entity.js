var Entity = Class.extend({
	sprite: null,
	shouldDestroy: false,

	init: function() {},
	update: function() {},
	getPos: function() {},
	getVel: function() {},
	getAngle: function() {},

	setPos: function(pos) {},
	setVel: function(vel) {},
	setAngle: function(angle) {},
	collided: function(other) {
		// console.log("colidiu " + this + " com " + other);
	}
});

var SimpleEntity = Entity.extend({
	sprite: null,
	_pos: {x: 0, y: 0},
	_vel: {x: 0, y: 0},
	_angle: 0,
	size: {x: 0, y: 0},

	getPos: function() {
		return this._pos;
	},
	getVel: function() {
		return this._vel;
	},
	getAngle: function() {
		return this._angle;
	},

	setPos: function(_pos) {
		this._pos = _pos;
	},
	setVel: function(_vel) {
		this._vel = _vel;
	},
	setAngle: function(_angle) {
		this._angle = _angle;
	},

	init: function() {

	},
	update: function() {
		this._pos.x += this._vel.x;
		this._pos.y += this._vel.y;
	},
});

var PhysicsEntity = Entity.extend({
	body: null,
	pos: null,

	init: function() {},
	update: function() {
	},
	getPos: function() { 
		return this.body.GetPosition();
	},
	getVel: function() {
		return this.body.GetLinearVelocity();
	},
	getAngle: function() {
		return this.body.GetAngle();
	},

	setPos: function(pos) {
		this.body.SetPosition(new Vec2(pos.x, pos.y));
	},
	setVel: function(vel) {
		this.body.SetLinearVelocity(new Vec2(vel.x, vel.y));
	},
	setAngle: function(angle) {
		this.body.SetAngle(angle);
	}
});
