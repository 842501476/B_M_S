const Router = require('koa-router');

const db = require('./../db');

const token = require("../utils/token")
// 创建路由
var router = new Router();


/**
 * ctx
 */
router.post('/', async (ctx, next) => {
    // 解构
    let { username, password } = ctx.request.body;
    // console.log({ username, password });

    let res = await db.find('user', { username, password });

    res = res[0];
    // console.log(res);
    if (res) {
        //登录成功。发送token
        let _token = token.create(username)
        ctx.body = {
            username: res.username,
            token: _token
        }

    } else {
        ctx.body = 0;
    }



    // 存入数据库

})

module.exports = router;