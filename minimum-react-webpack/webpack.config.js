const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = () => ({
	entry: './src/index.jsx',
	resolve: {
		extensions: ['.jsx', '...']
	},
	output: {
		clean: true
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							'@babel/preset-env',
							['@babel/preset-react', { runtime: 'automatic' }]
						]
					}
				},
				exclude: /node_modules/
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin()
	],
	devServer: {
		open: true
	}
});
