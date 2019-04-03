// 自定义特效
var $, skyconsWeather;
layui.config({
    base: "js/"
}).use(['form', 'element', 'layer', 'jquery'], function () {
    // var form = layui.form(),
    layer = layui.layer,
        // element = layui.element();
        $ = layui.jquery;

    //锁屏
    function lockPage() {
        let user = JSON.parse(localStorage.getItem('user'));
        // console.log(user.username);
        layer.open({
            title: false,
            type: 1,
            content: '	<div class="admin-header-lock" id="lock-box" style="text-align:center; width:320px;height:200px;margin-top:30px;border-radius:10px">' +
                '<div class="admin-header-lock-img"><img src="../images/xxx.jpg" class="layui-nav-img"></div>' +
                `<div class="admin-header-lock-name" id="lockUserName" style="margin-top:10px"> ${user.username}</div>` +
                '<div class="input_btn">' +
                '<input type="password" class="admin-header-lock-input layui-input" autocomplete="off" placeholder="请输入密码解锁.." name="lockPwd" id="lockPwd" style="width:250px;margin:10px auto;"/>'
                // '<input type="password" name="lockPwd" id="lockPwd" placeholder="请输入密码解锁.." autocomplete="off" class= "form-control" style="width:200px"/>'
                +
                '<button class="layui-btn" id="unlock" style="margin-top:10px">解锁</button>' +
                '</div>' +
                '<p style="margin-top:10px">请输入“520”，否则不会解锁成功(功能还在完善)！</p>' +
                '</div>',
            closeBtn: 0,
            shade: 0.9
        })
        $(".admin-header-lock-input").focus();
    }
    $(".lockcms").on("click", function () {
        window.sessionStorage.setItem("lockcms", true);
        lockPage();
    })
    // 判断是否显示锁屏
    if (window.sessionStorage.getItem("lockcms") == "true") {
        lockPage();
    }
    // 解锁
    $("body").on("click", "#unlock", function () {
        if ($(this).siblings(".admin-header-lock-input").val() == '') {
            layer.msg("请输入解锁密码！");
            $(this).siblings(".admin-header-lock-input").focus();
        } else {
            if ($(this).siblings(".admin-header-lock-input").val() == "520") {
                window.sessionStorage.setItem("lockcms", false);
                $(this).siblings(".admin-header-lock-input").val('');
                layer.closeAll("page");
            } else {
                layer.msg("密码错误，请重新输入！");
                $(this).siblings(".admin-header-lock-input").val('').focus();
            }
        }
    });
    $(document).on('keydown', function () {
        if (event.keyCode == 13) {
            $("#unlock").click();
        }
    });

});