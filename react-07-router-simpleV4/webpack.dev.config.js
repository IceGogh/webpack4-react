const path = require('path')

module.exports = {
	entry: "./index.jsx",
	output: {
		path: path.resolve(__dirname, ''),
		filename: 'bundle.js'
	},
	mode: 'development',
	devServer: {
		port: 7707
	},
	module: {
		rules: [
			{
				test: /\.js[x]$/,
				use: {
					loader: 'babel-loader'
				},
				exclude: /node_modules/
			}
		]
	}
}