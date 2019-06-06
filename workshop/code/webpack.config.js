const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = {
	entry: './src/index.js',
	output: {
		filename: 'script.js',
		path: path.resolve(__dirname, 'dist')
	},
	mode: 'development',
	devtool: 'inline-source-map',
	devServer: {
		contentBase: './src',
		hot: true
	},
	module: {
		rules: [
			{
				test: /\.s?css$/,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader'
				]
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: [
					'file-loader'
				]
			},
			{
				test: /\.html$/,
				use: [
					'html-loader'
				]
			},
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/'
                    }
                }]
            }
		]
	},
	plugins: [
		new CleanWebpackPlugin(["dist"]),
		new HtmlWebpackPlugin({
			title: 'Dentsu Data Labs',
			template: './src/index.html'
		}),
		new webpack.HotModuleReplacementPlugin()
	]
};

module.exports = config;