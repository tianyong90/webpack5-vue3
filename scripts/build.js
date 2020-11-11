const webpack = require('webpack')
const webpackConfig = require('../webpack.config')
const formatStats = require('./formatStats')

return new Promise((resolve, reject) => {
  webpack(webpackConfig, (err, stats) => {
    if (err) {
      console.error(err)
      return reject(err)
    }

    // 输出美化的 stats 数据
    console.log(formatStats(stats, 'dist'))

    // console.log('Build complete. Waiting for changes...')

    resolve()
  })
})
