const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, '..', './src/index.js'),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /.*\.(gif|png|jp(e*)g|svg)$/i,
        use: [{
          loader: "url-loader",
          options: {
              limit: 21000,
              name: "assets/images/[name]_[hash:8].[ext]"
          }
        }]
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Carousel Test',
      template: path.resolve(__dirname, '..', './src/index.html'),
    }),
  ],
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, '..', 'dist'),
    publicPath: "/"
  },
};
