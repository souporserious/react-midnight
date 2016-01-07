var path = require('path');
var webpack = require('webpack');
var TARGET = process.env.TARGET || null;

var config = {
  entry: {
    index: './src/react-dately.js',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: 'dist/',
    filename: 'react-dately.js',
    sourceMapFilename: 'react-dately.sourcemap.js',
    library: 'ReactDately',
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
  config.output.filename = 'react-dately.min.js';
  config.output.sourceMapFilename = 'react-dately.min.js';
  config.plugins.push(new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    },
    mangle: {
      except: ['React', 'ReactDately']
    }
  }));
}

module.exports = config;