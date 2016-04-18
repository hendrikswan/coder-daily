const webpack = require('webpack');
const path = require('path');

module.exports = {
    // Source maps support (or 'inline-source-map' also works)
    devtool: 'source-map',
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

    // Add loader for .ts files.
    module: {
        loaders: [
            { test: /\.js?$/, loaders: ['babel'], include: path.join(__dirname, 'src'), exclude: /node_modules/ },
        ],
    },

};
