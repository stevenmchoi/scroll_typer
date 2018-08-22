const path = require("path");

module.exports = {
	context: __dirname,
	entry: "./js/entry.js",
	output: {
		path: path.resolve(__dirname, "assets", "javascripts"),
		filename: "bundle.js",
	},
	module: {
		loaders: [{
			test: [/\.js?$/],
			exclude: /(node_modules)/,
			loader: "babel-loader",
			query: {
				presets: ["env", "react", "es2015"],
			},
		}, ],
	},
	devtool: "source-map",
	resolve: {
		extensions: [".js", "*"],
	},
};
