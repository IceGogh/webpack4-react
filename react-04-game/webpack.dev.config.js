const path = require('path')

module.exports = {
	entry: ['./index.jsx'],
	output: {
		path: path.resolve(__dirname, ''),
		filename: "bundle.js"
	},
	mode: 'development',
	devServer: {
		host: 'localhost',
		port: 7777
	},
	module: {
		rules: [
			{
				test: /\.(less|css)$/,
				use: ['style-loader','css-loader','less-loader']
			},
			{
				test: /\.js[x]$/,
				use: ['babel-loader'],
				exclude: /node_modules/
			},
			{
				test: /\.(png|gif|svg|jpg)$/,
				use: [
					{
						loader: "url-loader",
						options: {
							limit: 10000
						}
					}
				]
			}
		]
	}
}