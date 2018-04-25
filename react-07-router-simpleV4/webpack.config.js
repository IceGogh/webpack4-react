const path = require('path')

module.exports = {
	entry: "./index.jsx",
	output: {
		path: path.resolve(__dirname, ''),
		filename: 'bundle.js'
	},
	mode: 'production',
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