module.exports = {
    entry: "./index.ts",
    devtool: 'inline-source-map',
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style-loader!css-loader" },
            { test: /\.ts$/, loader: "ts-loader" },
            { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader' }
        ]
    }
};