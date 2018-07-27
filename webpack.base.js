const path = require('path');
const basePath = process.cwd();

module.exports = {
  entry: {
    index: `${basePath}/src/main.jsx`,
  },

  output: {
    path: `${basePath}/dist`,
    filename: "bundle.js",
  },

  module: {
    rules: [
      // babel loader
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  }
};
