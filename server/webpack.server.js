const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const webpackNodeExternals = require('webpack-node-externals');
const config = {
    // inform webpack we're building a bundle for node rather than browser
    target: 'node',
    // Tell webpack root file of our server application
    entry: './src/index.js',
    // Tell webpack where to put the outpu file
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    externals: [webpackNodeExternals()]
   
}

module.exports = merge(baseConfig, config);