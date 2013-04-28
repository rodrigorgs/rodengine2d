var RenderManager = Class.extend({
	canvas: null,
	ctx: null,

	init: function(canvas) {
		this.canvas = canvas;
		this.ctx = canvas.getContext("2d");
	},

	beginDraw: function() {
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
	},

	drawEntity: function(entity) {
		var img = ASSET_MANAGER.getAsset(entity.sprite);
		var pos = entity.getPos();

		ctx.save();
		ctx.translate(pos.x, pos.y);
		ctx.rotate(entity.getAngle());

		this.ctx.drawImage(img, 
			-img.width / 2, 
			-img.height / 2);

		ctx.restore();
	}
});