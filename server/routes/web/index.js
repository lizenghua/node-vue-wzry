/*
 * @message: 
 * @Author: lzh
 * @since: 2019-11-14 15:58:06
 * @lastTime: 2019-11-15 10:12:13
 * @LastAuthor: lzh
 */
module.exports = app => {
    const router = require("express").Router()
    const mongoose = require("mongoose")
    const Category = mongoose.model("Category")
    const Article = mongoose.model("Article")
    const Hero = mongoose.model("Hero")

    // 向后台中自动录入分类和文章数据（$$(".news-txt").map(a => a.innerHTML)）
    router.get("/news/init", async (req, res) => {
        const parent = await Category.findOne({
            name: "新闻分类"
        })
        const cats = await Category.find().where({parent}).lean()
        const newsTitles = ["11月12日全服不停机更新公告", "亲密度道具使用异常说明", "“新文创”下的探索与实践：王者荣耀x越剧文化论坛展开跨界对话", "11月8日体验服停机更新公告", "天后张靓颖倾情献唱，王者荣耀西施主打歌《幻纱之灵》正式上线", "", "西施主打歌《幻纱之灵》即将上线，张靓颖携手KPL明星轰炸斗鱼直播间", "新晋越剧女小生，王者荣耀·上官婉儿全息首演！", "峡谷四美明星集结，给你一个免费COS的机会！", "全民赢官方周边", "“新文创”下的探索与实践：王者荣耀x越剧文化论坛展开跨界对话", "腾讯天美工作室群IP探索新动作，《魂斗罗：归来》联动《终结者》！", "皮影婉儿、人偶婉儿、纸雕婉儿、板绘婉儿...你Pick哪一个？", "11月12日全服不停机更新公告", "", "11月14日体验服不停机更新公告", "11月12日体验服停机更新公告", "亲密度道具使用异常说明", "11月8日体验服停机更新公告", "11月7日体验服停机更新公告", "11月6日体验服停机更新公告", "11月5日全服不停机更新公告", "KPL季后赛开赛 参与活动送好礼", "", "告别孤单 浪漫峡谷陪你狂欢 秒杀皮肤限时返场", "感恩有你 李白新星元登场 峡谷全新福利来袭", "【周年许愿树】活动公告", "【周年庆典 明星抽内测】活动公告", "极致网速，快乐上分，中国电信邀你畅快赢好礼", "【回顾王者独家记忆 领专属局内称号】活动公告", "变身大作战——限时玩法开启，唤起你的回忆！", "2019年KPL秋季赛季后赛11月14日开战，冬季冠军杯选拔赛即将来袭", "2019年KPL秋季赛季后赛11月14日开战，冬季冠军杯选拔赛即将来袭", "你是赛评师：YTG再次被TS阻击倒在季后赛门外，TS真的天克YTG吗？", "11月13日【比赛服】版本更新公告", "第七届城市赛半决赛晋级队伍诞生，11月23日总决赛即将打响！", "区域联赛校队选拔晋级名单出炉！是时候为校出征啦！", "微赛事专题赛再度开启，为城市荣耀而战！", "双倍积分“通道”再次开启  城市探秘活动邀你竞猜本周入围队伍", "佛山“舞狮”助兴  城市赛全国半决赛精彩对抗即将来临！", "2019年KPL秋季赛季后赛11月14日开战，冬季冠军杯选拔赛即将来袭", "2019年KPL秋季赛季后赛11月14日开战，冬季冠军杯选拔赛即将来袭", "目标武汉，一起上场！KPL季后赛六大社区活动来袭", "【简讯】TS力克YTG夺取季后赛最后席位，YTG连续两届饮恨败北", "秋季赛快讯：TS决杀YTG进入季后赛，他们挣扎过但他们从未缺席过", "2019年KPL秋季赛常规赛荣誉体系候选人公示&amp;评选规则", "嘴强王者：2019KPL秋季赛常规赛结束，你心中的常规赛最佳阵容和MVP是谁？", "季后赛助威赢好礼，史诗皮肤送不停"];
        const newsList = newsTitles.map(title => {
            const randomCats = cats.slice(0).sort((a,b) => Math.random() - 0.5)
            return {
                categories: randomCats.slice(0,2),
                title: title
            }
        })
        await Article.deleteMany({}) // 清空文章
        await Article.insertMany(newsList) // 往数据库插入数据
        res.send(newsList)
    })

    // 新闻列表接口
    router.get("/news/list", async(req, res) => {
        const parent = await Category.findOne({
            name: "新闻分类"
        })
        const cats = await Category.aggregate([
            { $match: { parent: parent._id } },
            {
                $lookup: {
                    from: "articles",
                    localField: "_id",
                    foreignField: "categories",
                    as: "newsList"
                }
            },{
                $addFields: {
                    "newsList": { $slice: ["$newsList", 5] }
                }
            }
        ])
        const subCats = cats.map(v => v._id)
        cats.unshift({
            name: "热门",
            newsList: await Article.find().where({
                categories: { $in: subCats }
            }).populate("categories").limit(5).lean()
        })
        // 在热门中，分类名不应该显示热门，而是隶属原来的分类
        cats.map(cat => {
            cat.newsList.map(news => {
                news.categoryName = (cat.name === "热门") ? news.categories[0].name : cat.name
                return news
            })
            return cat
        })
        res.send(cats)
    })

    // 导入英雄数据
    // JSON.stringify($$(".hero-nav>li").map((el,i) => { 
    //     return {
    //         name: el.innerText,
    //         heroes: $$("li", $$(".hero-list")[i]).map(li => {
    //             return {
    //                 name: $$("h3", li)[0].innerHTML,
    //                 avatar: $$("img", li)[0].src
    //             }
    //         })
    //     }
    // }))
    router.get("/heroes/init", async (req, res) => {
        await Hero.deleteMany({}) //清空
        const rawData = [{ "name": "热门", "heroes": [{ "name": "后羿", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/169/169.jpg" }, { "name": "孙悟空", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/167/167.jpg" }, { "name": "铠", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/193/193.jpg" }, { "name": "鲁班七号", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/112/112.jpg" }, { "name": "亚瑟", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/166/166.jpg" }, { "name": "甄姬", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/127/127.jpg" }, { "name": "孙尚香", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/111/111.jpg" }, { "name": "典韦", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/129/129.jpg" }, { "name": "韩信", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/150/150.jpg" }, { "name": "庄周", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/113/113.jpg" }] }, { "name": "战士", "heroes": [{ "name": "赵云", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/107/107.jpg" }, { "name": "钟无艳", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/117/117.jpg" }, { "name": "吕布", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/123/123.jpg" }, { "name": "曹操", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/128/128.jpg" }, { "name": "典韦", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/129/129.jpg" }, { "name": "宫本武藏", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/130/130.jpg" }, { "name": "达摩", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/134/134.jpg" }, { "name": "老夫子", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/139/139.jpg" }, { "name": "关羽", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/140/140.jpg" }, { "name": "露娜", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/146/146.jpg" }, { "name": "花木兰", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/154/154.jpg" }, { "name": "亚瑟", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/166/166.jpg" }, { "name": "孙悟空", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/167/167.jpg" }, { "name": "刘备", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/170/170.jpg" }, { "name": "杨戬", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/178/178.jpg" }, { "name": "雅典娜", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/183/183.jpg" }, { "name": "哪吒", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/180/180.jpg" }, { "name": "铠", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/193/193.jpg" }, { "name": "狂铁", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/503/503.jpg" }, { "name": "李信", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/507/507.jpg" }, { "name": "盘古", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/529/529.jpg" }] }, { "name": "法师", "heroes": [{ "name": "小乔", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/106/106.jpg" }, { "name": "墨子", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/108/108.jpg" }, { "name": "妲己", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/109/109.jpg" }, { "name": "嬴政", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/110/110.jpg" }, { "name": "高渐离", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/115/115.jpg" }, { "name": "扁鹊", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/119/119.jpg" }, { "name": "芈月", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/121/121.jpg" }, { "name": "周瑜", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/124/124.jpg" }, { "name": "甄姬", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/127/127.jpg" }, { "name": "武则天", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/136/136.jpg" }, { "name": "貂蝉", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/141/141.jpg" }, { "name": "安琪拉", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/142/142.jpg" }, { "name": "姜子牙", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/148/148.jpg" }, { "name": "王昭君", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/152/152.jpg" }, { "name": "张良", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/156/156.jpg" }, { "name": "不知火舞", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/157/157.jpg" }, { "name": "钟馗", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/175/175.jpg" }, { "name": "诸葛亮", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/190/190.jpg" }, { "name": "干将莫邪", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/182/182.jpg" }, { "name": "女娲", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/179/179.jpg" }, { "name": "杨玉环", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/176/176.jpg" }, { "name": "弈星", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/197/197.jpg" }, { "name": "米莱狄", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/504/504.jpg" }, { "name": "沈梦溪", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/312/312.jpg" }, { "name": "上官婉儿", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/513/513.jpg" }, { "name": "嫦娥", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/515/515.jpg" }] }, { "name": "坦克", "heroes": [{ "name": "廉颇", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/105/105.jpg" }, { "name": "刘禅", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/114/114.jpg" }, { "name": "白起", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/120/120.jpg" }, { "name": "夏侯惇", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/126/126.jpg" }, { "name": "项羽", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/135/135.jpg" }, { "name": "程咬金", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/144/144.jpg" }, { "name": "刘邦", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/149/149.jpg" }, { "name": "牛魔", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/168/168.jpg" }, { "name": "张飞", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/171/171.jpg" }, { "name": "东皇太一", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/187/187.jpg" }, { "name": "苏烈", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/194/194.jpg" }, { "name": "梦奇", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/198/198.jpg" }, { "name": "孙策", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/510/510.jpg" }, { "name": "猪八戒", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/511/511.jpg" }] }, { "name": "刺客", "heroes": [{ "name": "阿轲", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/116/116.jpg" }, { "name": "李白", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/131/131.jpg" }, { "name": "韩信", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/150/150.jpg" }, { "name": "兰陵王", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/153/153.jpg" }, { "name": "娜可露露", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/162/162.jpg" }, { "name": "橘右京", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/163/163.jpg" }, { "name": "百里玄策", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/195/195.jpg" }, { "name": "裴擒虎", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/502/502.jpg" }, { "name": "元歌", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/125/125.jpg" }, { "name": "司马懿", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/137/137.jpg" }, { "name": "云中君", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/506/506.jpg" }] }, { "name": "射手", "heroes": [{ "name": "孙尚香", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/111/111.jpg" }, { "name": "鲁班七号", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/112/112.jpg" }, { "name": "马可波罗", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/132/132.jpg" }, { "name": "狄仁杰", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/133/133.jpg" }, { "name": "后羿", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/169/169.jpg" }, { "name": "李元芳", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/173/173.jpg" }, { "name": "虞姬", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/174/174.jpg" }, { "name": "成吉思汗", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/177/177.jpg" }, { "name": "黄忠", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/192/192.jpg" }, { "name": "百里守约", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/196/196.jpg" }, { "name": "公孙离", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/199/199.jpg" }, { "name": "伽罗", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/508/508.jpg" }] }, { "name": "辅助", "heroes": [{ "name": "庄周", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/113/113.jpg" }, { "name": "孙膑", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/118/118.jpg" }, { "name": "蔡文姬", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/184/184.jpg" }, { "name": "太乙真人", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/186/186.jpg" }, { "name": "大乔", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/191/191.jpg" }, { "name": "鬼谷子", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/189/189.jpg" }, { "name": "明世隐", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/501/501.jpg" }, { "name": "盾山", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/509/509.jpg" }, { "name": "瑶", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/505/505.jpg" }] }]

        for (let cat of rawData) {
            if(cat.name === "热门"){
                continue
            }
            const category = await Category.findOne({
                name: cat.name
            })
            cat.heroes = cat.heroes.map(hero => {
                hero.categories = [category]
                return hero
            })
            // 录入英雄
            await Hero.insertMany(cat.heroes)
        }
        res.send(await Hero.find())
    })

    // 英雄列表接口
    router.get("/heroes/list", async(req, res) => {
        const parent = await Category.findOne({
            name: "英雄分类"
        })
        const cats = await Category.aggregate([ // 聚合
            { $match: { parent: parent._id } }, // 条件查询
            {
                $lookup: { // 关联查询
                    from: "heroes",
                    localField: "_id",
                    foreignField: "categories",
                    as: "heroList"
                }
            }
        ])
        const subCats = cats.map(v => v._id)
        cats.unshift({
            name: "热门",
            heroList: await Hero.find().where({
                categories: { $in: subCats }
            }).limit(10).lean()
        })
       
        res.send(cats)
    })
    
    app.use("/web/api", router)
}