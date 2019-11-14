/*
 * @message: 文章模型
 * @Author: lzh
 * @since: 2019-11-06 15:30:38
 * @lastTime: 2019-11-14 16:21:33
 * @LastAuthor: lzh
 */

const mongoose = require("mongoose")

const Schema = new mongoose.Schema({
    title: { type: String },
    categories: [{ type: mongoose.SchemaTypes.ObjectId, ref: "Category" }],
    body: { type: String }
},{
    timestamps: true
})

module.exports = mongoose.model("Article",Schema)