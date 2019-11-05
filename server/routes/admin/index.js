/*
 * @message: 
 * @Author: lzh
 * @since: 2019-11-05 15:39:00
 * @lastTime: 2019-11-05 17:18:45
 * @LastAuthor: Do not edit
 */
module.exports = app => {
    const express = require("express")
    const router = express.Router()
    const Category = require("../../models/Category.js")

    router.post("/categories", async (req, res) => {
        const model = await Category.create(req.body)
        res.send({
            model
        })
    })

    app.use("/admin/api",router)
}