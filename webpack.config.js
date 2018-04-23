const path = require('path');

module.exports = {
	context: __dirname,
	entry: './js/index.js',
	output: {
		path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
		filename: 'bundle.js',
	},
	module: {
		loaders: [
			{
				test: [/\.js?$/],
				exclude: /(node_modules)/,
				loader: 'babel-loader',
				query: {
					presets: ['env', 'es2015'],
				},
			},
		],
	},
	devtool: 'source-map',
	resolve: {
		extensions: ['.js', '*'],
	},
};
