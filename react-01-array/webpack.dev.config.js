const path = require('path')

module.exports = {
	entry: ['./index.jsx'],
	output: {
		filename: "bundle.jsx",
		path: path.resolve(__dirname, '')
	},
	mode: 'development',
	devServer: {
		host: 'localhost',
		port: 7701
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				use: ['babel-loader']
					,
				exclude: /node_module/
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader'
				]
			}
		]
	}
}