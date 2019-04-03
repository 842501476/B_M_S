const Router = require('koa-router');

const db = require('../db');

var ObjectId = require('mongodb').ObjectId;

// 创建路由
var router = new Router();

router.get('/', async (ctx, next) => {
    // console.log(ctx.request.query);
    let { page, limit } = ctx.request.query;
    // var limit = ctx.query.limit;
    let data = await db.find("user", {}, page, limit * 1);
    let data2 = await db.find("user", {});
    let count = data2.length;

    let res = {
        code: 0,
        data: data,
        count: count,
    }
    ctx.body = res;
})

// 判断用户名是否存在
router.get('/', async (ctx, next) => {
    let { username } = ctx.query;

    let res = await db.find('user', { username });

    if (res.length > 0) {
        ctx.body = 'no'
    } else {
        ctx.body = 'yes'
    }
})

router.post('/', async (ctx, next) => {
    // 解构
    let { _id } = ctx.request.body;
    // console.log('ObjectId(' + _id + ')');

    let res = await db.delete('user', { _id: ObjectId(_id) });

    ctx.body = res;
    // 存入数据库

})

module.exports = router;