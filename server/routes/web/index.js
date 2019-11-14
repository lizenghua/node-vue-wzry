/*
 * @message: 
 * @Author: lzh
 * @since: 2019-11-14 15:58:06
 * @lastTime: 2019-11-14 20:47:44
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
    router.get("/heros/init", async (req, res) => {
        await Hero.deleteMany({}) //清空
        const rawData= [{"name":"热门","heroes":[{"name":"孙悟空","avatar":"https://game.gtimg.cn/images/yxzj/img201606/heroimg/167/167.jpg"},{"name":"亚瑟","avatar":"https://game.gtimg.cn/images/yxzj/img201606/heroimg/166/166.jpg"},{"name":"鲁班七号","avatar":"https://game.gtimg.cn/images/yxzj/img201606/heroimg/112/112.jpg"},{"name":"后羿","avatar":"https://game.gtimg.cn/images/yxzj/img201606/heroimg/169/169.jpg"},{"name":"铠","avatar":"https://game.gtimg.cn/images/yxzj/img201606/heroimg/193/193.jpg"},{"name":"甄姬","avatar":"https://game.gtimg.cn/images/yxzj/img201606/heroimg/127/127.jpg"},{"name":"安琪拉","avatar":"https://game.gtimg.cn/images/yxzj/img201606/heroimg/142/142.jpg"},{"name":"妲己","avatar":"https://game.gtimg.cn/images/yxzj/img201606/heroimg/109/109.jpg"},{"name":"孙尚香","avatar":"https://game.gtimg.cn/images/yxzj/img201606/heroimg/111/111.jpg"},{"name":"吕布","avatar":"https://game.gtimg.cn/images/yxzj/img201606/heroimg/123/123.jpg"}]},{"name":"战士","heroes":[{"name":"赵云","avatar":"https://game.gtimg.cn/images/yxzj/img201606/heroimg/107/107.jpg"},{"name":"钟无艳","avatar":"https://game.gtimg.cn/images/yxzj/img201606/heroimg/117/117.jpg"},{"name":"吕布","avatar":"https://game.gtimg.cn/images/yxzj/img201606/heroimg/123/123.jpg"},{"name":"曹操","avatar":"https://game.gtimg.cn/images/yxzj/img201606/heroimg/128/128.jpg"},{"name":"典韦","avatar":"https://game.gtimg.cn/images/yxzj/img201606/heroimg/129/129.jpg"},{"name":"宫本武藏","avatar":"https://game.gtimg.cn/images/yxzj/img201606/heroimg/130/130.jpg"},{"name":"达摩","avatar":"https://game.gtimg.cn/images/yxzj/img201606/heroimg/134/134.jpg"},{"name":"老夫子","avatar":"https://game.gtimg.cn/images/yxzj/img201606/heroimg/139/139.jpg"},{"name":"关羽","avatar":"https://game.gtimg.cn/images/yxzj/img201606/heroimg/140/140.jpg"},{"name":"露娜","avatar":"https://game.gtimg.cn/images/yxzj/img201606/heroimg/146/146.jpg"},{"name":"花木兰","avatar":"https://game.gtimg.cn/images/yxzj/img201606/heroimg/154/154.jpg"},{"name":"亚瑟","avatar":"https://game.gtimg.cn/images/yxzj/img201606/heroimg/166/166.jpg"},{"name":"刘备","avatar":"https://game.gtimg.cn/images/yxzj/img201606/heroimg/170/170.jpg"},{"name":"杨戬","avatar":"https://game.gtimg.cn/images/yxzj/img201606/heroimg/178/178.jpg"},{"name":"雅典娜","avatar":"https://game.gtimg.cn/images/yxzj/img201606/heroimg/183/183.jpg"},{"name":"哪吒","avatar":"https://game.gtimg.cn/images/yxzj/img201606/heroimg/180/180.jpg"},{"name":"铠","avatar":"https://game.gtimg.cn/images/yxzj/img201606/heroimg/193/193.jpg"},{"name":"狂铁","avatar":"https://game.gtimg.cn/images/yxzj/img201606/heroimg/503/503.jpg"},{"name":"李信","avatar":"https://game.gtimg.cn/images/yxzj/img201606/heroimg/507/507.jpg"},{"name":"盘古","avatar":"https://game.gtimg.cn/images/yxzj/img201606/heroimg/529/529.jpg"},{"name":"曜","avatar":"https://game.gtimg.cn/images/yxzj/img201606/heroimg/522/522.jpg"},{"name":"马超","avatar":"https://game.gtimg.cn/images/yxzj/img201606/heroimg/518/518.jpg"}]},{"name":"法师","heroes":[]},{"name":"坦克","heroes":[]},{"name":"刺客","heroes":[]},{"name":"射手","heroes":[]},{"name":"辅助","heroes":[]}]

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
    
    app.use("/web/api", router)
}