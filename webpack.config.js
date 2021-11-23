const { resolve } = require('path')
const EslintWebpackPlugin = require('eslint-webpack-plugin')

const config = {
    mode: 'none',//'production',
    entry: resolve(__dirname, './src'),
    output: {
        path: resolve(__dirname, './lib'),
        clean: true,
        filename: 'index.js',
        library: {
            type: 'commonjs',
        },
    },
    resolve: {
        extensions: [
            ".ts", ".js"
        ],
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: 'ts-loader',
            },
        ]
    },
    plugins: [
        new EslintWebpackPlugin(),
    ],
}

module.exports = config
