
// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
//     template: 'src/index.html',
//     filename: 'index.html',
//     inject: 'body'
// });


module.exports = {
    entry: {
        index: [
            './src/index.jsx',
            './src/style.css'
        ],
        menu: './src/menu.jsx',
        services: './src/services.jsx',
        header: './src/header.jsx',
        specials: './src/specials.jsx',
    },
    output: {
        filename: '[name].js',
        path: __dirname + "/docs",
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx", ".json"]
    },
    module: {
        rules: [
            // rules for modules (configure loaders, parser options, etc.)
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                options: {
                    presets: ["react"] //"es2015"]
                },
            },
            { test: /\.css$/, loader: "style-loader!css-loader" },
        ],
    },
    // plugins: [HtmlWebpackPluginConfig],
    devtool: '#source-map',
};

