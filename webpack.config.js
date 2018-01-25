/* eslint-disable */
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    resolve: {
        extensions: ['*', '.js', '.jsx', '.json']
    },
    devtool: 'cheap-module-eval-source-map', // more info:https://webpack.js.org/guides/development/#using-source-maps and https://webpack.js.org/configuration/devtool/
    entry: [
        // must be first entry to properly set public path
        './src/webpack-public-path',
        'react-hot-loader/patch',
        'babel-polyfill',
        'webpack-hot-middleware/client?reload=true',
        path.resolve(__dirname, 'src/index.js') // Defining path seems necessary for this to work consistently on Windows machines.
    ],
    target: 'web',
    devServer: {
        compress: true,
        host: '0.0.0.0',
        port: 3000,
        historyApiFallback: true,
        hot: true,
        stats: {
            colors: true,
            hash: false,
            version: false,
            timings: false,
            assets: true,
            chunks: false,
            modules: false,
            reasons: false,
            children: false,
            source: false,
            errors: true,
            errorDetails: true,
            warnings: true,
            publicPath: true
        }
    },
    output: {
        path: path.resolve(__dirname, 'dist'), // Note: Physical files are only output by the production build task `npm run build`.
        publicPath: '/',
        filename: 'bundle.js'
    },
    plugins: [
        new ExtractTextPlugin('styles.css'),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development'), // Tells React to build in either dev or prod modes. https://facebook.github.io/react/downloads.html (See bottom)
            __DEV__: true
        }),
        new webpack.ProvidePlugin({
            SmoothScroll: 'smoothscroll-polyfill',
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            Popper: ['popper.js', 'default'],
        }),
        new webpack.ContextReplacementPlugin(/moment[\\\/]locale$/, /^\.\/(en|ru|ua)$/),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new HtmlWebpackPlugin({     // Create HTML file that includes references to bundled CSS and JS.
            template: 'src/index.html',
            minify: {
                removeComments: true,
                collapseWhitespace: true
            },
            inject: true
        })
    ],
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.eot(\?v=\d+.\d+.\d+)?$/,
                use: ['file-loader']
            },
            {
                test: /\.(scss|css)$/,
                use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader'],
                })),
            },
            {
                test: /\.(jpg|png|woff|woff2|eot|ttf|svg)$/,
                use: 'url-loader',
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000,
                            mimetype: 'application/font-woff'
                        }
                    }
                ]
            },
            {
                test: /\.[ot]tf(\?v=\d+.\d+.\d+)?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000,
                            mimetype: 'application/octet-stream'
                        }
                    }
                ]
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000,
                            mimetype: 'image/svg+xml'
                        }
                    }
                ]
            },
            {
                test: /\.(jpe?g|png|gif|ico)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]'
                        }
                    }
                ]
            },
        ]
    }
};
