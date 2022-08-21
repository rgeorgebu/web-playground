import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import RazorPartialViewsWebpackPlugin from 'razor-partial-views-webpack-plugin';
import { resolve } from 'path';

export default (_, { mode }) => ({
	entry: './src/index.jsx',
	resolve: {
		extensions: ['.jsx', '...']
	},
	output: {
		clean: true,
		path: resolve('./test/wwwroot')
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
							mode === 'development' && 'react-refresh/babel'
						].filter(Boolean)
					}
				},
				exclude: /node_modules/
			}
		]
	},
	plugins: [
		// new HtmlWebpackPlugin(),
		mode === 'development' && new ReactRefreshWebpackPlugin()
	].filter(Boolean),
	devServer: {
		client: {
			webSocketURL: 'ws://localhost:8080/ws'
		},
		devMiddleware: {
			writeToDisk: true
		}
	},
});
