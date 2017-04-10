
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractCSS = require('extract-text-webpack-plugin');

const VENDOR_LIBS = [
    'react', 'react-dom', 'youtube-api-search', 'moment', 'lodash'
]

const config = {
    entry: {
        app: './src/index.js',
        vendor: VENDOR_LIBS
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[chunkhash].bundle.js'
    },
    module: {
        rules: [
            {
              test: /\.js$/,
              use: 'babel-loader',
              exclude: /node_modules/,
            },
            {
              test: /\.jsx$/,
              use: 'babel-loader',
              exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ExtractCSS.extract({
                    use: 'css-loader'   // translates CSS into CommonJS
                }),
                exclude: /node_modules/
            },
            { 
                test: /\.(png|woff|woff2|eot|ttf|svg)$/, 
                loader: 'url-loader?limit=100000',
                exclude: /node_modules/ 
            }  
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor', 'manifest'],
            minChunks: function (module) {
                // this assumes your vendor imports exist in the node_modules directory
                return module.context && module.context.indexOf('node_modules') !== -1;
            }
        }),
        new ExtractCSS('styles.bundle.css'),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        })
    ]
}

// Add for development stage
    // devServer: {
    //     contentBase: path.join(__dirname, "dist"),
    //     compress: true,
    //     port: 8080
    // },
    // devtool: '#source-map'

const webpackConfig = module.exports = config;
