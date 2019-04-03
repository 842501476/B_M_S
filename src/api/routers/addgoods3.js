const Router = require('koa-router');

const db = require('../db');

var ObjectId = require('mongodb').ObjectId;
// 创建路由
var router = new Router();
router.post('/', async (ctx, next) => {
    // 解构
    let { _id, goodname, newprice, oldprice, kucun, type, zhuangtai } = ctx.request.body;
    console.log(_id, goodname, newprice, oldprice, kucun, type, zhuangtai);
    let data = { _id: ObjectId(_id), goodname, newprice, oldprice, kucun, type, zhuangtai, shijian: new Date() };
    // console.log(data);
    // ctx.body = res;
    // 存入数据库
    let str = await db.delete('goodlist', { _id: ObjectId(_id) });
    let res = await db.insert('goodlist', data);
    ctx.body = res;
})

module.exports = router;