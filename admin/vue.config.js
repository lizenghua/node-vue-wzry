/*
 * @message:
 * @Author: lzh
 * @since: 2019-11-15 20:07:29
 * @lastTime: 2019-11-15 20:08:01
 * @LastAuthor: lzh
 */
module.exports = {
  outputDir: __dirname + "/../server/admin",
  publicPath: process.env.NODE_ENV === "production" ? "/admin/" : "/"
};
