/*
 * @message: 
 * @Author: lzh
 * @since: 2019-11-05 15:39:00
 * @lastTime: 2019-11-06 09:51:31
 * @LastAuthor: Do not edit
 */
module.exports = app => {
    const express = require("express")
    const router = express.Router({
        mergeParams: true
    })
    const multer = require("multer")
    const upload = multer({ dest: __dirname + "/../../uploads" })

    // 新建
    router.post("/", async (req, res) => {
        const model = await req.Model.create(req.body)
        res.send(model)
    })
    // 保存编辑
    router.put("/:id", async (req, res) => {
        const model = await req.Model.findByIdAndUpdate(req.params.id,req.body)
        res.send(model)
    })
    // 删除
    router.delete("/:id", async (req, res) => {
        await req.Model.findByIdAndDelete(req.params.id,req.body)
        res.send({
            success: true
        })
    })
    // 获取列表
    router.get("/", async (req, res) => {
        const queryOptions = {}
        if(req.Model.modelName === "Category"){
            queryOptions.populate = "parent"
        }
        const items = await req.Model.find().setOptions(queryOptions)
        res.send(items)
    })
    // 详情
    router.get("/:id", async (req, res) => {
        const model = await req.Model.findById(req.params.id)
        res.send(model)
    })

    app.use("/admin/api/rest/:resource", async (req, res, next) => {
        const modelName = require("inflection").classify(req.params.resource)
        req.Model = require(`../../models/${modelName}`)
        next()
    },router)

    // 图片上传
    app.post("/admin/api/upload", upload.single('file'), async (req, res) => {
        const file = req.file
        file.url = `http://localhost:3000/uploads/${file.filename}`
        res.send(file)
    })
}