/*
 * @message: 管理员模型
 * @Author: lzh
 * @since: 2019-11-06 16:40:31
 * @lastTime: 2019-11-06 17:44:07
 * @LastAuthor: Do not edit
 */

const mongoose = require("mongoose")

const Schema = new mongoose.Schema({
    username: { type: String },
    password: { 
        type: String,
        select: false,
        set(val) {
            return require("bcrypt").hashSync(val, 10);
        }
    }
})

module.exports = mongoose.model("AdminUser",Schema)