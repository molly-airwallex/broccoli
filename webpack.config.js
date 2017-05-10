var ExtractTextPlugin = require('extract-text-webpack-plugin');
require('babel-polyfill');
function getDevTool() {
    if (process.env.NODE_ENV !== 'production') {
        return 'source-map'; //enables source map
    }

    return false;
}

module.exports = {
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015', 'stage-0']
                }
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('css!sass')
            }
        ]
    },
    entry: [ 'babel-polyfill', './src/scripts/main.js' ],
    output: {
        filename: './dist/scripts/[name].js'
    },
    devtool: getDevTool(),
    plugins: [
        new ExtractTextPlugin('dist/styles/main.css', {
            allChunks: true
        })
    ]
};
