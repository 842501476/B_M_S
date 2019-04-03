
const Router = require("koa-router");

const { verify } = require("../utils/token");

var router = new Router();

router.post('/', async (ctx, next) => {
    let { token } = ctx.request.body;
    //验证token
    let res = verify(token);
    // console.log(res);
    if (res) {
        ctx.body = {
            status: 200,
            msg: 'success'
        }
    } else {
        ctx.body = {
            status: 302,
            msg: 'fail'
        }
    }


});
module.exports = router;