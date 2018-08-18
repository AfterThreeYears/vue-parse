const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const TransferWebpackPlugin = require('transfer-webpack-plugin');

console.log('loooooooding');

module.exports = {
  // baseUrl: '/',
  configureWebpack: {
    plugins: [
      new TransferWebpackPlugin([{from: 'www'}], path.resolve(__dirname, 'src')),
    ]
  }
}
