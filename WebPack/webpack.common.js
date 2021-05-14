const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'app.[contenthash].js',
        path: path.resolve(__dirname, 'build'),
        clean: true
    },
    plugins: [new HtmlWebpackPlugin({
        template: './src/templates/index.html',
    })],
    module: {
        rules: [
            {
                test: /\.scss$/i,
                use: ["style-loader",
                    "css-loader",
                    "sass-loader",]
            },
        ],
    },
}