var path = require('path');
var webpack = require('webpack');
var TARGET = process.env.TARGET || null;

var config = {
  entry: {
    index: './src/react-midnight.js',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: 'dist/',
    filename: 'react-midnight.js',
    sourceMapFilename: 'react-midnight.sourcemap.js',
    library: 'ReactMidnight',
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
    'react': 'React',
    'react-dom': 'ReactDOM',
    'prop-types': 'PropTypes'
  },
};

if (TARGET === 'minify') {
  config.output.filename = 'react-midnight.min.js';
  config.output.sourceMapFilename = 'react-midnight.min.js';
  config.plugins.push(new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    },
    mangle: {
      except: ['React', 'ReactDOM', 'ReactMidnight']
    }
  }));
}

module.exports = config;
