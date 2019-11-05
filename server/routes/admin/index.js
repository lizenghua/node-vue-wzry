/*
 * @message: 
 * @Author: lzh
 * @since: 2019-11-05 15:39:00
 * @lastTime: 2019-11-05 18:03:37
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
    // 保存编辑分类
    router.put("/categories/:id", async (req, res) => {
        const model = await Category.findByIdAndUpdate(req.params.id,req.body)
        res.send(model)
    })
    // 分类列表
    router.get("/categories", async (req, res) => {
        const items = await Category.find()
        res.send(items)
    })
    // 分类详情
    router.get("/categories/:id", async (req, res) => {
        const model = await Category.findById(req.params.id)
        res.send(model)
    })

    app.use("/admin/api",router)
}