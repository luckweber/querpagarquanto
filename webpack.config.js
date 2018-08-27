const path = require('path');
const webpack = require('webpack');
const port = process.env.PORT || 3000;
const HtmlWebpackPlugin = require('html-webpack-plugin')


  module.exports = {
    entry: './src/index.js',
    mode:'production',
    output: {
      filename: 'assets/js/bundle.js',
      path: path.resolve(__dirname, 'public')
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader'
          ]
        },
        {
          test: /\.(js)$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        },
        {
          test: /\.(png|woff|woff2|eot|ttf|svg)$/,
          use: ['url-loader']
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'My App',
        filename: 'index.html'
      })
    ]
  };
