const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	output: {
		filename: "bundle.js",
		publicPath: "/",
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./public/index.html",
		}),
	],
	module: {
		rules: [
			{
				test: /\.(js||jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env", "@babel/preset-react"],
					},
				},
			},
		],
	},
};