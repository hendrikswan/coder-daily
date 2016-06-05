const webpack = require('webpack');
const path = require('path');


console.log(process.env.NODE_ENV)

module.exports = {
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
    ],
    resolve: {
        alias: {
            config: path.join(__dirname, 'src', 'config', process.env.NODE_ENV),
        },
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                loaders: ['react-hot', 'babel'],
                include: path.join(__dirname, 'src'),
                exclude: /node_modules/,
            },
        ],
    },

};
