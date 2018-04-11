const path = require('path')

module.exports = {
	entry: ['./src/index.js'],
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, '')
	},
	devServer: {
		host: 'localhost',
		port: 7700
	},
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
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader'
				]
			},
			{
				test: /\.(png|jpg|svg|gif)$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 10000
						}
					}
				]
			}
		]
	},
	mode: 'development'
}