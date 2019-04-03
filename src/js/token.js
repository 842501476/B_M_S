/**
 * @token  验证
 *  
 */
layui.define(['layer'], function (exports) {
    var layer = layui.layer;
    (() => {
        let welcome = document.querySelector('.welcome');
        let loginout = document.querySelector('.loginout');
        let user = localStorage.getItem('user');
        if (!user) {
            user = {}
            var index = layer.msg('检测到您未登录，请登录！！！', { icon: 16, time: false, shade: 1 });
            setTimeout(() => {
                layer.close(index);
                location.href = "../index.html";
            }, 2000);
        } else {
            user = JSON.parse(user);
        }

        if (user.token) {
            // 判断本地是否有token
            let xhr = new XMLHttpRequest();
            xhr.onload = () => {
                let res = JSON.parse(xhr.responseText);
                // console.log(res);
                if (res.status == 200) {
                    welcome.innerHTML = `${user.username}`
                }
            }
            xhr.open('post', '/tokenverify', true);
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            xhr.send('token=' + user.token);
        }

        //    退出
        loginout.onclick = (e) => {
            layer.msg("退出成功！");
            setTimeout(() => {
                localStorage.removeItem('user');
                location.href = "../index.html";
            }, 1000);
        }
    })();
});