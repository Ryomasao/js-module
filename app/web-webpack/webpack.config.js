const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src/app.js'),
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: false,
  devServer: {
    contentBase: "dist",
  }
};