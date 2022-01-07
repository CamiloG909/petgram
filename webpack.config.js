const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackPwaManifestPlugin = require("webpack-pwa-manifest");
const WorkboxWebpackPlugin = require("workbox-webpack-plugin");
const path = require("path");

module.exports = {
	output: {
		filename: "bundle.js",
		publicPath: "/",
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./public/index.html",
		}),
		new WebpackPwaManifestPlugin({
			name: "Petgram - Your app to view images of beautiful pets",
			short_name: "Petgram",
			description: "Your app to view images of beautiful pets",
			background_color: "#111111",
			theme_color: "#1ccc5b",
			icons: [
				{
					src: path.resolve("./src/assets/icon.jpeg"),
					sizes: [96, 128, 192, 256, 384, 512],
				},
			],
		}),
		new WorkboxWebpackPlugin.GenerateSW({
			runtimeCaching: [
				{
					urlPattern: new RegExp(
						"https://(res.cloudinary.com|images.unsplash.com)/"
					),
					handler: "CacheFirst",
					options: {
						cacheName: "images",
					},
				},
			],
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
