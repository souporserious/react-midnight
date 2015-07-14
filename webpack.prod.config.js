var path = require('path');
var webpack = require('webpack');
var TARGET = process.env.TARGET || null;

var config = {
  entry: {
    index: './src/index.js',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: 'dist/',
    filename: 'Picker.js',
    sourceMapFilename: 'Picker.sourcemap.js',
    library: 'Picker',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [
      {test: /\.(js|jsx)/, loader: 'babel?stage=0'}
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
  config.output.filename = 'Picker.min.js';
  config.output.sourceMapFilename = 'Picker.min.js';
  config.plugins.push(new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    },
    mangle: {
      except: ['React', 'Picker', 'Calendar', 'Time']
    }
  }));
}

module.exports = config;