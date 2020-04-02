module.exports = {
  configureWebpack: {
    externals: {
      ace: 'ace'
    }
  },
  css: {
    extract: false
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vue-ace-editor-valid/'
    : '/'
}
