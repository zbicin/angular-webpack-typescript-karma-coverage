var webpackConfig = require('./webpack.config.js');
var path = require('path');

webpackConfig.entry = {};
webpackConfig.module.postLoaders = [
    {
        test: /\.ts$/,
        loader: 'istanbul-instrumenter-loader',
        exclude: [
            'node_modules',
            /\.spec\.ts$/
        ]
    }
]

module.exports = webpackConfig;