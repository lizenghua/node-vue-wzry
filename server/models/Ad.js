/*
 * @message: 广告位模型
 * @Author: lzh
 * @since: 2019-11-06 16:17:55
 * @lastTime: 2019-11-06 16:21:18
 * @LastAuthor: Do not edit
 */

const mongoose = require("mongoose")

const Schema = new mongoose.Schema({
    name: { type: String },
    items: [{
        image: { type: String },
        url: { type: String }
    }]
})

module.exports = mongoose.model("Ad",Schema)