const HTMLWebpackPlugin = require("html-webpack-plugin");
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
	template: __dirname + '/src/index.html',
	filename: 'index.html',
	inject: 'body'
});

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
var MiniCssExtractPluginConfig = new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "bundle.css",
      chunkFilename: "[id].css"
});


module.exports = {
	entry: __dirname + '/src/app.js',
	output: {
		path: __dirname + '/dist',
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: 'babel-loader'
			},
			{
				test: /\.jsx$/,
				exclude: /(node_modules)/,
				use: 'babel-loader'
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
				test: /\.(sa|sc|c)ss$/,
				use: [
		          MiniCssExtractPlugin.loader,
		          'css-loader'
		        ]
			},
			{
		         test: /\.(png|svg|jpg|gif)$/,
		         use: [
		           'file-loader'
		         ]
		    }
		]
	},
	devServer: {
	    inline:true,
	    port: 8090
	},
	plugins: [
    	HTMLWebpackPluginConfig,
    	MiniCssExtractPluginConfig
  	]
};