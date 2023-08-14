const path = require('path');

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
     }
}