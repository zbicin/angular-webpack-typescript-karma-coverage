var webpackConfig = require('./webpack.config.js');

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