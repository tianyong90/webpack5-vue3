const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  mode: 'development',
  target: 'web',
  entry: './src/main.js',
  // output: {
  //   filename: 'index.js',
  //   path: path.resolve(__dirname, 'dist'),
  // },
  // cache: {
  //   type: 'filesystem',
  //   store: 'pack',
  // },
  resolve: {
    extensions: [
      '.tsx',
      '.ts',
      '.js',
      '.jsx',
      '.vue',
      '.json',
    ],
    alias: {
      '@': path.join(__dirname, 'src'),
      vue$: 'vue/dist/vue.esm-bundler.js',
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['thread-loader', 'babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.ts$/,
        use: [
          'thread-loader',
          'babel-loader',
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
              appendTsSuffixTo: ['\\.vue$'],
              happyPackMode: true,
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: !isProduction,
            },
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: !isProduction,
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: !isProduction,
            },
          },
          'css-loader',
          {
            loader: 'sass-loader',
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: !isProduction,
            },
          },
        ],
      },
      {
        test: /\.(gif|png|jpe?g|svg|ico)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: 'assets/[name].[hash:5].[ext]',
              limit: 200, // 小于8k的图片自动转成base64格式，并且不会存在实体图片,
              // publicPath:'./'
            },
          },
        ],
      },
    ],
  },
  devServer: {
    open: false,
    hot: true,
    inline: true,
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    stats: 'minimal',
    overlay: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'webpack5-vue3',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        collapseBooleanAttributes: true,
        removeScriptTypeAttributes: true,
      },
      template: './public/index.html',
      inject: true,
      prod: isProduction,
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new ProgressBarPlugin(),
    new VueLoaderPlugin(),
    new FriendlyErrorsWebpackPlugin(),
  ],
}
