/*
 * @message: 连接数据库
 * @Author: lzh
 * @since: 2019-11-05 15:42:26
 * @lastTime: 2019-11-05 17:13:12
 * @LastAuthor: Do not edit
 */
module.exports = app => {
    const mongoose = require("mongoose")

    mongoose.connect("mongodb://127.0.0.1:27017/node-vue-moba", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
}