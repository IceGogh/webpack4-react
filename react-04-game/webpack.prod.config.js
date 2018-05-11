const path = require('path')

module.exports = {
	entry: ['./index.jsx'],
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: "[name].js"
	},
	mode: 'production',
	module: {
		rules: [
			{
				test: /\.(less|css)$/,
				use: ['style-loader', 'css-loader', 'less-loader']
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
	},
	plugins: [
		new HtmlWebpackPlugin({
      template: 'index.html',
      title: 'vue-element-admin'
    })
	]
}