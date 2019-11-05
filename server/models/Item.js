/*
 * @message: 物品模型
 * @Author: lzh
 * @since: 2019-11-05 20:43:50
 * @lastTime: 2019-11-05 20:44:40
 * @LastAuthor: Do not edit
 */
const mongoose = require("mongoose")

const Schema = new mongoose.Schema({
    name: { type: String },
    icon: { type: String }
})

module.exports = mongoose.model("Item",Schema)