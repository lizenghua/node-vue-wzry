/*
 * @message:
 * @Author: lzh
 * @since: 2019-11-15 20:07:29
 * @lastTime: 2019-11-15 20:18:28
 * @LastAuthor: lzh
 */
module.exports = {
  outputDir: __dirname + "/../server/web"
  // 因为我们需要在域名的根目录访问 web 所以不作如下配置
  // publicPath: process.env.NODE_ENV === "production" ? "/web/" : "/"
};
