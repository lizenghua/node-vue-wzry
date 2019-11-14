/*
 * @message: 连接数据库
 * @Author: lzh
 * @since: 2019-11-05 15:42:26
 * @lastTime: 2019-11-14 15:57:04
 * @LastAuthor: lzh
 */
module.exports = app => {
    const mongoose = require("mongoose")

    mongoose.connect("mongodb://127.0.0.1:27017/node-vue-moba", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    // 将所有模型引入进来
    require("require-all")(__dirname + "/../models/");
}