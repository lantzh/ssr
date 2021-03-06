const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base')

config = {
    // Tell webpack root file of our server application
    entry: './src/client/client.js',
    // Tell webpack where to put the outpu file
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },

}

module.exports = merge(baseConfig, config);