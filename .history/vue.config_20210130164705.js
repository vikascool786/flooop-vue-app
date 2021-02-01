module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/#/flooop/'
    : '/',
  configureWebpack:{
    performance: {
      hints: false
    },
    optimization: {
      splitChunks: {
        minSize: 10000,
        maxSize: 250000,
      }
    }
  }
}
