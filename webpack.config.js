var webpack = require('webpack');
var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
entry: './src/index',
output: {
path: path.resolve(__dirname, 'dist'),
filename: 'pub-manager.bundle.js'
},
module: {
    rules: [{
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
    }]
},
plugins: [
new HtmlWebpackPlugin({ template: './src/index.html' })
]
};
