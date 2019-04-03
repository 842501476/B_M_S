const Router = require('koa-router');

const db = require('../db');

var ObjectId = require('mongodb').ObjectId;

// 创建路由
var router = new Router();

router.get('/', async (ctx, next) => {

    let { page, limit } = ctx.request.query;

    let data = await db.find("goodlist", {}, page, limit * 1);
    let data2 = await db.find('goodlist', {});
    // console.log(ctx.query,username,res)
    let count = data2.length;
    let res = {
        code: 0,
        data: data,
        count: count,
    }
    ctx.body = res;
})

router.post('/', async (ctx, next) => {
    // 解构
    let { _id } = ctx.request.body;
    // console.log('ObjectId(' + _id + ')');

    let res = await db.delete('goodlist', { _id: ObjectId(_id) });

    ctx.body = res;
    // 存入数据库

})
module.exports = router;