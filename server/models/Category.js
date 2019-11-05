/*
 * @message: 数据模型
 * @Author: lzh
 * @since: 2019-11-05 17:13:56
 * @lastTime: 2019-11-05 17:15:52
 * @LastAuthor: Do not edit
 */
const mongoose = require("mongoose")

const Schema = new mongoose.Schema({
    name: { type: String }
})

module.exports = mongoose.model("Category",Schema)