const path = require('path');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');

module.exports = {
  mode: 'development',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new Dotenv({
      path: path.resolve(__dirname, '..', './.env.development'),
    }),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, '..', './dist'),
    hot: true,
    port: 8080,
    historyApiFallback: true,
    overlay: true,
    open: false,
  },
  devtool: 'eval-source-map',
};
