var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
  target: 'web',
  entry: './src/main.js',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: false,
    port: 9000
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
}
