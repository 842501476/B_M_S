const Router = require('koa-router');

const db = require('../db');
var router = new Router();

// 判断用户名是否存在
router.get('/', async (ctx, next) => {
    let { username } = ctx.query;

    let data = await db.find('user', { username });

    let res = {
        code: 0,
        data: data,

    }
    ctx.body = res;
})


module.exports = router;