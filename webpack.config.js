const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const VENDOR_LIST = ['jquery', 'react', 'react-dom'];

module.exports = {
  entry: {
    bundle: './src/Main.jsx',
    vendor: VENDOR_LIST,
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[chunkhash].js',
  },
  devServer: {
    compress: true,
    port: 3000,
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      // {
      //   use: {
      //     loader: 'eslint-loader',
      //     options: {
      //       failOnWarning: false,
      //       failOnError: false,
      //     },
      //   },
      //   enforce: 'pre',
      //   test: /\.(js|jsx)$/,
      //   exclude: /(node_modules)/,
      // },
      {
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react']
          },
        },
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
      }, {
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader'],
        }),
        test: /\.(scss|css)$/,
      },
      {
        test: /\.(jpg|png|woff|woff2|eot|ttf|svg)$/,
        use: 'url-loader',
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
    }),
    // new webpack.optimize.UglifyJsPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
  ],
};
