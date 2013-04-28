var AssetManager = Class.extend({
	assets: {},

	getAsset: function(file) {
		var img = this.assets[file];
		if (!img) {
			img = new Image();
			this.assets[file] = img;
			img.src = file;
		}
		return img;
	},

	loadAll: function(files, onload) {
		var count = files.length;

		for (var i = 0; i < files.length; i++) {
			var file = files[i];
			var img = new Image();
			this.assets[file] = img;

			img.onload = function() {
				count--;
				if (count == 0)
					onload();
			}

			img.src = file;
		}
	}
});

var ASSET_MANAGER = new AssetManager();