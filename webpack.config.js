const path = require('path');
const mode = process.env.NODE_ENV === 'production' ? 'production' : 'development';

module.exports = {
	mode,
	context: __dirname,
	entry: './js/entry.js',
	output: {
		path: path.resolve(__dirname, 'assets', 'javascripts'),
		filename: 'bundle.js',
	},
	module: {
		rules: [
			{
				test: [/\.js?$/],
				exclude: /(node_modules)/,
				loader: 'babel-loader',
				query: {
					presets: ['env', 'react', 'es2015'],
				},
			},
		],
	},
	devtool: 'source-map',
	resolve: {
		extensions: ['.js', '*'],
	},
};
