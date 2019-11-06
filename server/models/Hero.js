/*
 * @message: 英雄模型
 * @Author: lzh
 * @since: 2019-11-06 10:19:22
 * @lastTime: 2019-11-06 15:02:03
 * @LastAuthor: Do not edit
 */
const mongoose = require("mongoose")

const Schema = new mongoose.Schema({
    name: { type: String },
    avatar: { type: String },
    title: { type: String },
    categories: [{ type: mongoose.SchemaTypes.ObjectId, ref: "Category" }],
    scores: {
        difficult: { type: Number },
        skills: { type: Number },
        attack: { type: Number },
        survive: { type: Number }
    },
    skills: [{
        icon: { type: String },
        name: { type: String },
        description: { type: String },
        tips: { type: String }
    }],
    items1: [{ type: mongoose.SchemaTypes.ObjectId, ref: "Item"}],
    items2: [{ type: mongoose.SchemaTypes.ObjectId, ref: "Item"}],
    usageTips: { type: String },
    battleTips: { type: String },
    teamTips: { type: String },
    partners: [{
        hero: { type: mongoose.SchemaTypes.ObjectId, ref: "Hero" },
        description: { type: String }
    }]
})

module.exports = mongoose.model("Hero",Schema)