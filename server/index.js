/*
 * @message: 服务端入口文件
 * @Author: lzh
 * @since: 2019-11-05 11:33:26
 * @lastTime: 2019-11-06 09:49:43
 * @LastAuthor: Do not edit
 */
const express = require('express')
const app = express()
const port = 3000

app.use(require("cors")())
app.use(express.json())
// 托管静态文件
app.use("/uploads", express.static(__dirname + "/uploads"))

// 引入数据库
require("./plugins/db")(app)
// 引入路由
require("./routes/admin/")(app);

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`http://localhost:${port}`))