const path = require('path')

module.exports = {
	entry: ['./index.jsx'],
	output: {
		path: path.resolve(__dirname, ''),
		filename: 'bundle.js'
	},
	mode: 'development',
	devServer: {
		port: 7708
	},
	module: {
		rules: [
			{
				test: /\.js[x]$/,
				use: [
					'babel-loader'
				],
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				use:[
					'style-loader', 'css-loader'
				]
			}
		]
	}
}