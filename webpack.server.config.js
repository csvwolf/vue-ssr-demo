const path = require('path');
const webpack = require('webpack');
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin');

module.exports = {
  target: 'node',
  entry: './src/entry-server.js',
  devtool: '#source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      { test: /\.js$/, use: ['babel-loader', 'eslint-loader'], exclude: /node_modules/ },
      { test: /\.scss$/, use: ['style-loader', 'css-loader', 'scss-loader'] },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.vue$/, use: ['vue-loader'] },
      { test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/, exclude: /favicon\.png$/, use: ['url-loader'] }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      'process.env.VUE_ENV': '"server"'
    }),
    new VueSSRServerPlugin()
  ]
};
