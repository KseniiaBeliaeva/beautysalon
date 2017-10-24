/*
    ./webpack.config.js
*/
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './src/index.html',
    filename: './index.html',
    inject: 'body'
});

module.exports = {
    entry: {
        index: './src/index.jsx', 
    },
    output: {
        filename: '[name].js',
        path: __dirname + "/dist",
    },
    module: {
        rules: [
            // rules for modules (configure loaders, parser options, etc.)

            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                options: {
                    presets: ["react"] //"es2015"]
                },
            },
        ],
    },
    plugins: [HtmlWebpackPluginConfig],
};

