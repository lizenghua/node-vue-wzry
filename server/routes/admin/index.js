/*
 * @message: 
 * @Author: lzh
 * @since: 2019-11-05 15:39:00
 * @lastTime: 2019-11-07 15:03:26
 * @LastAuthor: Do not edit
 */
module.exports = app => {
    const express = require("express")
    const router = express.Router({
        mergeParams: true
    })
    const multer = require("multer")
    const upload = multer({ dest: __dirname + "/../../uploads" })
    const AdminUser = require("../../models/AdminUser.js")
    const jwt = require("jsonwebtoken")
    const assert = require("http-assert")

    // 登录校验中间件
    const authMiddleware = async (req, res, next) => {
        const token = String(req.headers.authorization || "").split(" ").pop()
        assert(token, 401, "请先登录")
        const { id } = jwt.verify(token, app.get("secret"))
        assert(id, 401, "请先登录")
        req.user = await AdminUser.findById(id)
        assert(req.user, 401, "请先登录")
        next()
    }

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

    app.use("/admin/api/rest/:resource", authMiddleware, async (req, res, next) => {
        const modelName = require("inflection").classify(req.params.resource)
        req.Model = require(`../../models/${modelName}`)
        next()
    },router)

    // 图片上传
    app.post("/admin/api/upload", authMiddleware, upload.single('file'), async (req, res) => {
        const file = req.file
        file.url = `http://localhost:3000/uploads/${file.filename}`
        res.send(file)
    })

    // 登录
    app.post("/admin/api/login", async (req, res) => {
        const { username, password } = req.body
        // 根据用户名找用户
        const user = await AdminUser.findOne({ username }).select("+password")
        // if(!user){
        //     return res.status(422).send({
        //         message: "用户不存在"
        //     })
        // }
        assert(user, 422, "用户名不存在")
        // 校验密码
        const isValid = require("bcrypt").compareSync(password, user.password)
        // if(!isValid){
        //     return res.status(422).send({
        //         message: "密码无效"
        //     })
        // }
        assert(isValid, 422, "密码无效")
        // 返回token
        const token = jwt.sign({id:user._id}, app.get("secret"))
        res.send({
            token,
            username
        })
    })

    // 错误处理函数
    app.use( (err, req, res, next) => {
        res.status(err.statusCode || 500).send({
            message: err.message
        })
    })
}