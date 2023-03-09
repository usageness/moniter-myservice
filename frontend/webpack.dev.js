const path = require('path');

const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { DefinePlugin } = require('webpack');
const { merge } = require('webpack-merge');

const common = require('./webpack.common.js');

require('dotenv').config({
  path: path.join(__dirname, './.env'),
});

module.exports = merge(common, {
  mode: 'development',
  devtool: 'source-map',
  entry: path.resolve(__dirname, './src/index.tsx'),
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new DefinePlugin({
      'process.env.BASE_URL': JSON.stringify(process.env.BASE_URL),
    }),
  ],
  devServer: {
    historyApiFallback: true,
    static: path.resolve(__dirname, './dist'),
    port: 3000,
    client: {
      logging: 'none',
    },
  },
});
