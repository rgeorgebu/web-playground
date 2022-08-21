import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";

export default () => ({
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
						],
						plugins: [
							'react-refresh/babel'
						]
					}
				},
				exclude: /node_modules/
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin(),
		new ReactRefreshWebpackPlugin()
	],
	devServer: {
		open: true,
	}
});
