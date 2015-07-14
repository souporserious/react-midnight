var path = require('path');
var webpack = require('webpack');
var TARGET = process.env.TARGET || null;

var config = {
    entry: {
        index: './src/index.js'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: 'dist/',
        filename: 'Calendar.js',
        sourceMapFilename: 'Calendar.sourcemap.js',
        library: 'Calendar',
        libraryTarget: 'umd'
    },
    module: {
        loaders: [
            { test: /\.(js|jsx)/, loader: 'babel?stage=0' }
        ]
    },
    plugins: [],
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    externals: {
        'react': 'React'
    },
};

if(TARGET === 'minify') {
    config.output.filename = 'Calendar.min.js';
    config.output.sourceMapFilename = 'Calendar.min.js';
    config.plugins.push(new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        },
        mangle: {
            except: ['React', 'moment', 'Calendar']
        }
    }));
}

module.exports = config;