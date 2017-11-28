const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

const VENDOR_LIST = ['react', 'react-dom', 'babel-polyfill', 'smoothscroll-polyfill'];

module.exports = {
    entry: {
        bundle: './src/app.jsx',
        vendor: VENDOR_LIST,
    },
    output: {
        path: path.join(__dirname, 'public'),
        filename: '[name].[chunkhash].js',
    },
    devServer: {
        compress: true,
        host: '0.0.0.0',
        port: 3000,
        historyApiFallback: true
    },
    devtool: 'source-map',
    resolve: {
        modules: ['node_modules'],
        extensions: ['.js', '.jsx'],
    },
    module: {
        rules: [
            {
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'react'],
                    },
                },
                test: /\.(js|jsx)$/,
                // exclude: /(node_modules)/,
            }, {
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'postcss-loader', 'sass-loader'],
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
            template: './src/index.html',
        }),
        new CopyWebpackPlugin([{
            from: './src/assets',
            to: './assets',
        }]),
        new webpack.ProvidePlugin({
            Promise: 'bluebird',
            SmoothScroll: 'smoothscroll-polyfill',
        }),
    ],
};
