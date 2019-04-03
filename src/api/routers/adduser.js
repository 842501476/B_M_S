const Router = require('koa-router');

const db = require('../db');

var ObjectId = require('mongodb').ObjectId;

// 创建路由
var router = new Router();

router.post('/', async (ctx, next) => {
    // 解构
    let { _id } = ctx.request.body;
    // console.log(ctx.request.body);

    let res = await db.find('user', { _id: ObjectId(_id) });
    // console.log(res);
    ctx.body = res;
    // 存入数据库

})


module.exports = router;