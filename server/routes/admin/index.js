/*
 * @message: 
 * @Author: lzh
 * @since: 2019-11-05 15:39:00
 * @lastTime: 2019-11-05 17:43:01
 * @LastAuthor: Do not edit
 */
module.exports = app => {
    const express = require("express")
    const router = express.Router()
    const Category = require("../../models/Category.js")

    // 新建分类
    router.post("/categories", async (req, res) => {
        const model = await Category.create(req.body)
        res.send(model)
    })
    // 分类列表
    router.get("/categories", async (req, res) => {
        const items = await Category.find()
        res.send(items)
    })

    app.use("/admin/api",router)
}