const webpack = require('webpack');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    devServer: {
        contentBase: path.join(__dirname, 'src'),
        publicPath: '/',
        progress: true,
        port: 8080
    },
    output: {
        path: path.join(__dirname, 'out'),
        filename: 'potato.js'
    }
};
