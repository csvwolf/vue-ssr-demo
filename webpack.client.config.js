const path = require('path');
const webpack = require('webpack');
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')

module.exports = {
  entry: './src/entry-client.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: './',
    filename: 'client-bundle.[chunkhash].js'
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
    // Important: this splits the webpack runtime into a leading chunk
    // so that async chunks can be injected right after it.
    // this also enables better caching for your app/vendor code.
    new webpack.optimize.CommonsChunkPlugin({
      name: "manifest",
      minChunks: Infinity
    }),
    // This plugins generates `vue-ssr-client-manifest.json` in the
    // output directory.
    new VueSSRClientPlugin()
  ]
};
