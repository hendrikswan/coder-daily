const webpack = require('webpack');
const path = require('path');

module.exports = {
    // Source maps support (or 'inline-source-map' also works)
    devtool: 'eval',
    entry: {
        main: [
            'webpack-dev-server/client?http://localhost:8080',
            'webpack/hot/only-dev-server',
            './src/main.js',
        ],
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, './public'),
        publicPath: '/public/',
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.ProvidePlugin({
            fetch:
            'imports?this=>global!exports?global.fetch!whatwg-fetch',
        }),
    ],

    module: {
        loaders: [
            {
                test: /\.js?$/,
                loaders: ['react-hot', 'babel'],
                include: path.join(__dirname, 'src'),
                exclude: /node_modules/,
                // query: {
                //     presets: ['es2015', 'react', 'stage-0'],
                // },
            },
        ],
    },

};
