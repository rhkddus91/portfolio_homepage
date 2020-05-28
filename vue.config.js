const path = require('path');
const fs  = require('fs');

module.exports = {
  /*
  pages:{
    page0:{
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    },
    page1:{
        entry: 'src/main2.js',
        template: 'public/skin1.html',
        filename: 'skin1.html'
    },
    page2:{
        entry: 'src/main3.js',
        template: 'public/skin2.html',
        filename: 'skin2.html'
    }
  },
  */
  pages:{
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },

  outputDir: path.resolve(__dirname, './dist'),

  "transpileDependencies": [
    "vuetify"
  ],

  runtimeCompiler: true,

  configureWebpack: {
    devServer: {
      host: '0.0.0.0',
      port: '8080',
      disableHostCheck: true
    }
  },

  publicPath: '',

  pluginOptions: {
    cordovaPath: 'cordova'
  },

  lintOnSave : false,

  devServer: {
    // https 적용을 위한 코드
    https: true,
    https: { key: fs.readFileSync('../../../etc/letsencrypt/live/josns.net/privkey.pem'),
    cert: fs.readFileSync('../../../etc/letsencrypt/live/josns.net/cert.pem'),
    ca: fs.readFileSync('../../../etc/letsencrypt/live/josns.net/chain.pem'), }, 
    // devServer Options don't belong into `configureWebpack`
    // dev 빌드상태에도 도메인으로 접속하기 위해서 추가한 코드
    host: '0.0.0.0',
    hot: true,
    disableHostCheck: true,
  }


}
