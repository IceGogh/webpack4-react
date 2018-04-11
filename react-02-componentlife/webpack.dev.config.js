const path = require('path')
const webpack = require('webpack')
module.exports = {
	entry: ["./index.jsx"],
	output: {
		path: path.resolve(__dirname, ''),
		filename: 'bundle.js'
	},
	mode: "development",
	devServer: {
		host: 'localhost',
		port: 7777
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	],
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				use: {
					loader: 'babel-loader'
				},
				exclude: /node_modules/
			},
			{
				test: /\.(png|jpg|gif|svg)$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 10000
						}
					}
				]
			},
			{
				test: /\.css$/,
				use: [
					"style-loader",
					"css-loader"
				]
			}
		]
	}
}