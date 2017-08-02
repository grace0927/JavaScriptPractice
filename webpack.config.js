const path = require('path');

const config = {
  entry: './react/showcase/showCase.js',
  output: {
    filename: 'showcase.js',
    path: path.resolve(__dirname, 'assets/js'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader?presets[]=es2015,presets[]=react'],
      },
    ],
  },
};

module.exports = config;
