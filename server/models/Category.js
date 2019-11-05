/*
 * @message: 数据模型
 * @Author: lzh
 * @since: 2019-11-05 17:13:56
 * @lastTime: 2019-11-05 18:49:51
 * @LastAuthor: Do not edit
 */
const mongoose = require("mongoose")

const Schema = new mongoose.Schema({
    name: { type: String },
    parent: { type: mongoose.SchemaTypes.ObjectId, ref: "Category" }
})

module.exports = mongoose.model("Category",Schema)