const fs = require('fs');
const path = require('path');
const webpack = require('webpack');

const sourcePath = path.join(__dirname, './src');
const outputPath = path.join(__dirname);

module.exports = {
  mode: 'development',
  entry: sourcePath + '/index.js',
  output: {
    path: path.resolve(__dirname),
		filename: "main.js",
   libraryTarget: 'commonjs2'
  },
  target: 'node'
}