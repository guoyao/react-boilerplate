const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './app/app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: ''
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {compact: false}
                }
            },
            {
                test: /favicon\.ico$/,
                use: {loader: 'file-loader?name=[name].[ext]'}
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true, // Inject all files that are generated by webpack, e.g. bundle.js
            template: 'app/index.html'
        })
    ]
};