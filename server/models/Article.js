/*
 * @message: 文章模型
 * @Author: lzh
 * @since: 2019-11-06 15:30:38
 * @lastTime: 2019-11-06 15:42:03
 * @LastAuthor: Do not edit
 */

const mongoose = require("mongoose")

const Schema = new mongoose.Schema({
    title: { type: String },
    categories: [{ type: mongoose.SchemaTypes.ObjectId, ref: "Category" }],
    body: { type: String }
})

module.exports = mongoose.model("Article",Schema)