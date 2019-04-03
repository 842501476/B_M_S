const Router = require('koa-router');

const db = require('../db');

// 创建路由
var router = new Router();

router.post('/', async (ctx, next) => {
    // 解构
    let { goodname, newprice, oldprice, kucun, type, zhuangtai } = ctx.request.body;

    let data = { goodname, newprice, oldprice, kucun, type, zhuangtai, shijian: new Date() }
    let res = await db.insert('goodlist', data);
    // console.log(res);
    ctx.body = res

    // 存入数据库

})


module.exports = router;