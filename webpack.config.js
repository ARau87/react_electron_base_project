'use strict';

// https://www.codementor.io/tamizhvendan/beginner-guide-setup-reactjs-environment-npm-babel-6-webpack-du107r9zr
// https://electron.atom.io/docs/tutorial/quick-start/
// https://webpack.js.org/

var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'dist/client/public');
var SRC_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
  entry: SRC_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  }
};

module.exports = config;
