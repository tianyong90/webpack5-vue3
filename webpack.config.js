const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

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
        use: 'babel-loader',
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
              hmr: true,
            },
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
            options: {
              // TODO: 根据构建模式取值
              sourceMap: true,
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
              hmr: true,
            },
          },
          'css-loader',
          {
            loader: 'sass-loader',
          },
          {
            loader: 'postcss-loader',
            options: {
              // TODO: 根据构建模式取值
              sourceMap: true,
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
      title: 'vue3-test',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        collapseBooleanAttributes: true,
        removeScriptTypeAttributes: true,
      },
      template: './public/index.html',
      inject: true,
      prod: false,
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new ProgressBarPlugin(),
    new VueLoaderPlugin(),
    new FriendlyErrorsWebpackPlugin(),
  ],
}
