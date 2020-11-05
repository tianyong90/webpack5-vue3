const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  target: 'web',
  entry: './src/main.js',
  resolve: {
    extensions: [
      '.tsx',
      '.ts',
      '.js',
      '.jsx',
      '.vue',
      '.json'
    ],
    alias: {
      vue$: 'vue/dist/vue.runtime.esm-bundler.js'
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              // TODO: 根据构建模式取值
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.(gif|png|jpe?g|svg|ico)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: 'assets/[name].[hash:5].[ext]',
              limit: 200 // 小于8k的图片自动转成base64格式，并且不会存在实体图片,
              // publicPath:'./'
            }
          }
        ]
      }
      // {test: /\.css$/, use:['style-loader','css-loader']},//配置处理.css文件的第三方处理规则
      // {test: /\.scss$/, use: ["style-loader",'css-loader','sass-loader']},
      // {test: /\.(jpg|png|gif|bmp|jpeg)$/, use: "url-loader?limit=8000"},
      // {test: /\.(tff|eot|svg|woff|woff2)$/, use: "url-loader"},
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: false,
    port: 9000
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new VueLoaderPlugin()
  ]
}
