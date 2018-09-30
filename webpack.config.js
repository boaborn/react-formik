const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const debug = process.env.NODE_ENV !== 'production'

module.exports = {
  devtool: debug ? 'inline-sourcemap' : false,
  entry: {
    main: ['babel-polyfill', './src/js/index.js']
  },
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'main.min.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.less$/,
        use: [{
          loader: 'style-loader' // creates style nodes from JS strings
        }, {
          loader: 'css-loader', // translates CSS into CommonJS
          options: {
            sourceMap: true
          }
        }, {
          loader: 'less-loader', // compiles Less to CSS
          options: {
            sourceMap: true
          }
        }]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
        loader: 'file-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  devServer: {
    compress: true,
    historyApiFallback: {
      verbose: true,
      disableDotRule: true,
      index: '/'
    }
  }
}
