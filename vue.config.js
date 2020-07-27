module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  devServer: {
    proxy: {
      // proxy all requests starting with /api to jsonplaceholder
      '/api': {
        target: 'http://122.51.195.243:8080',   //代理接口（ps:这里为随意打的地址）
        changeOrigin: true,
        //pathRewrite: {
        // '^/api': ''    //代理的路径 //是否移除api三个字段,这里我不需要移除，所以注释，具体根据自己的项目前后端来看
        //}
      }
    }
  }
}