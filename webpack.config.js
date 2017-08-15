const path = require('path');

const config = {
  entry: {
    showcase: './react/showcase/showCase.js',
    todo: './backbone/todo/TodoApp.js',
  },
  output: {
    filename: '[name].js',
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
