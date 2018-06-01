const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: __dirname + '/src/app.js',
	output: {
		path: __dirname + '/dist',
		filename: 'bundle.js',
		publicPath: "assets"
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: ['babel-loader']
			},
			{
				test: /\.json$/,
				exclude: /(node_modules)/,
				use: "json-loader"
			},
			{
				test: /\.html$/,
				use: "html-loader"
			},
			{
				test: /\.css$/,
				use: "style-loader!css-loader!autoprefixer-loader"
			},
			{
				test: /\.scss$/,
				use: "style-loader!css-loader!autoprefixer-loader!sass-loader"
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
		template: "./index.html",
		filename: "./index.html"
		})
	]
};