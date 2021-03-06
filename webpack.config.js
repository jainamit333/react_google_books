const path = require('path');
const LiveReloadPlugin = require('webpack-livereload-plugin');
const webpack = require('webpack');

module.exports = {
    entry: './client/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'client/dist')
    },
    context: __dirname,
    resolve: {
        extensions: ['.js', '.jsx', '.json', '*']
    },
    devtool:'cheap-module-source-map',
    devServer: {
        inline: true,
        contentBase: './dist',
        port: 3001
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader',
            options: {
                presets: ['react', 'es2015','stage-2']
            }
        },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }]
    },
    plugins: [
        new webpack.DefinePlugin({

            'process.env.COSMIC_BUCKET': JSON.stringify(process.env.COSMIC_BUCKET),
            'process.env.COSMIC_READ_KEY': JSON.stringify(process.env.COSMIC_READ_KEY),
            'process.env.COSMIC_WRITE_KEY': JSON.stringify(process.env.COSMIC_WRITE_KEY)
        }),
        new LiveReloadPlugin({appendScriptTag: true})
    ]
};