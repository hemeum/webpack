const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './index.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        port: 8000,
    },
    module: {
        rules: [{test: /\.(tsx)$/, use: 'ts-loader'}]
    },
    resolve: {
        alias: {
            'browser': path.resolve(__dirname, 'path/to/browser')
          },
        extensions: [".ts", ".js", ".tsx", ".jsx"]
     },
     plugins: [
        new HtmlPlugin({
            template: './public/index.html'
        })
     ]
}