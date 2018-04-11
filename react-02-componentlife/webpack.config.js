const path = require('path')

module.exports = {
	entry: ['./index.jsx'],
	output: {
		filename: 'index.min.js',
		path: path.resolve(__dirname, 'dist')
	},
	mode: 'production',
	module: {
		rules: [
			{
				test: /\.css$/,
				use:[
					'style-loader',
					'css-loader'
				]
			},
			{
				test: /\.(js|jsx)$/,
				use: [
					"babel-loader"
				],
				exclude: /nodu_modules/
			},
			{
				test: /\.(png|gif|jpg|svg)/,
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
	}
}