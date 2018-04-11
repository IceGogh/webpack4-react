const path = require('path')

module.exports = {
	entry: ['./index.jsx'],
	output: {
		path: path.resolve(__dirname, ''),
		filename: 'bundle.js'
	},
	mode: 'development',
	devServer: {
		host: 'localhost',
		port: '7777'
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				use: ['babel-loader'],
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				use:[
					'style-loader',
					'css-loader'
				]
			}
		]
	}
}