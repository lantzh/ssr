const path = require('path');

module.exports = {
    // inform webpack we're building a bundle for node rather than browser
    target: 'node',
    // Tell webpack root file of our server application
    entry: './src/index.js',
    // Tell webpack where to put the outpu file
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    // Tell webpack to run babel on every file it runs through
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [
                        'react',
                        'stage-0',
                        ['env',{ targets: { browsers: ['last 2 versions'] }}]
                    ]
                }
            }
        ]
    }
}