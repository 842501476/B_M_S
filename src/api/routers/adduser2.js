const Router = require('koa-router');

const db = require('../db');

var ObjectId = require('mongodb').ObjectId;
// 创建路由
var router = new Router();
router.post('/', async (ctx, next) => {
    // 解构
    let { _id, username, password, email, gender, beizhu } = ctx.request.body;
    // console.log(_id, goodname, newprice, oldprice, kucun, type);
    let data = { _id: ObjectId(_id), username, password, email, gender, beizhu, regtime: new Date() };
    // console.log(data);
    // ctx.body = res;
    // 存入数据库
    let str = await db.delete('user', { _id: ObjectId(_id) });
    let res = await db.insert('user', data);
    ctx.body = res;
})

module.exports = router;