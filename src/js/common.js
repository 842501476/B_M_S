/*
	公共函数：经常会使用到的函数，大家都可以调用
*/

/*
 	randomNum(min, max):
 	说明：返回min到max之间的一个随机数
 	参数一：最小值
 	参数二：最大值
 */

function randomNum(min, max) {
	//返回min到max之间是随机数
	//最新小：Math.random()+min 0-1之间   0-0.99999
	//最大的：Math.random()*max+1
	return parseInt(Math.random() * (max - min + 1)) + min;
}

//-------------------------------------------------------------

/*
 	getid(id):
 	说明：通过id查找元素
 	参数：传id名进来
 	
 */
function getid(id) {
	return document.getElementById(id);
}


//----------------------------------------------------------
function ArrayIndexOf(arr, value, n) {
	var i = isNaN(n) ? 0 : n;//有第三参时
	i = (i < 0) ? arr.length + i : i;//第三参为负数时
	for (i; i < arr.length; i++) {
		if (arr[i] === value) {
			return i;
		}
	}
	return -1;
}
//-------------------------------------------------------------
function map(fn) {
	var res = [];//存处理好的数据
	//处理过程
	for (var i = 0; i < arr.length; i++) {
		res.push(fn(arr[i]));
	}
	return res;
}
//--------------------------------------------------------
function fackIncludes(str, value) {
	if (str.indexOf(value) != -1) {
		return true
	}
	return false
}
//-------------------------------------------------------
/*
 	查找首节点：
 	参数： 父节点
 	返回值： 第一个子节点
 
 */

function firstChild(parent) {
	if (parent.firstElementChild) {
		//高级浏览器
		return parent.firstElementChild;
	} else {
		return parent.firstChild;
	}
}
/*
 	查找尾节点：
 	参数： 父节点
 	返回值： 最后个子节点
 
 */

function lastChild(parent) {
	if (parent.lastElementChild) {
		//高级浏览器
		return parent.lastElementChild;
	} else {
		return parent.lastChild;
	}
}
/*
 	filterTex(str):
 	说明：过滤敏感词
 	参数：传要过滤的字符串进来，返回一个过滤后的字符串，敏感词变成**
 
 * */

function filterTex(str) {
	//敏感
	var sensitive = ['傻B', '妈蛋', 'bitch', 'fuck', '操', '垃圾', '废物', '你妈', 'nmb', 'nmd', 'nm', 'cnm', '干你', '智障', '草泥马'];
	for (var i = 0; i < sensitive.length; i++) {
		var reg = new RegExp(sensitive[i], 'gi');
		str = str.replace(reg, '***');
	}
	return str;
}
//---------------------------------------------------
/*
随机验证码（包含大小写）
*/
function randomCode() {
	var str = '';
	var str2 = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM'
	//只要可以生成随即下标就可以获取
	//获取方法：var num = randomCode();
	//			??.vaule = num;
	for (var i = 0; i < 4; i++) {
		var num = randomNum(0, str2.length - 1);
		str += str2.charAt(num);
	}
	return str;
}


//--------------------------------------------------

/*
 	randomColor(str):
 	说明：生成随机颜色
 	参数：如果传16进来，生成16进制颜色，如果传rgb进来，传rgb颜色
 
 * */

function randomColor(str) {
	//生成随机颜色
	if (str == 16) {
		//生成16进制的   '0123456789abcdef'  #666677
		var str = '0123456789abcdef';
		var color = '#';
		for (var i = 0; i < 6; i++) {
			color += str.charAt(parseInt(Math.random() * str.length));
		}

		return color;

	} else if (str == 'rgb') {
		//rgb(255,255,0) 生成3个随机数，每个随机数应该在  0-255
		var r = parseInt(Math.random() * 256);
		var g = parseInt(Math.random() * 256);
		var b = parseInt(Math.random() * 256);

		return 'rgb(' + r + ',' + g + ',' + b + ')';

	} else {
		alert('参数传错了');
	}
}

//-----------------------------
//补零操作
function setDb(num) {
	//小于10的，补零
	if (num < 10) {
		return '0' + num;
	} else {
		return '' + num;
	}
}

//---------------------------

//封装时间函数，把毫秒转成xx天xx时xx分xx秒   return {}
//一、
function settime(diffTime) {

	var sec = setDb(diffTime % 60); //秒
	var min = setDb(Math.floor(diffTime / 60) % 60); //分
	var hour = setDb(Math.floor(diffTime / 60 / 60) % 24); //小时
	var day = Math.floor(diffTime / 60 / 60 / 24);
	var str = day + '天  ' + hour + ':' + min + ':' + sec;
	return str;
}
//二、
function setTime(diffTime) {
	var sec = setDb(diffTime % 60); //秒
	var min = setDb(Math.floor(diffTime / 60) % 60); //分
	var hour = setDb(Math.floor(diffTime / 60 / 60) % 24); //小时
	var day = Math.floor(diffTime / 60 / 60 / 24);
	return {//想返回多个数的时候，做成json数据
		'sec': sec,
		'min': min,
		'hour': hour,
		'day': day
	};
}
//------------------------

//字符串转成对象
//传的参数： id=001&name=iphone7 plugs&imgurl=img/ip7.jpg&price=5899&sale=5888&color=土豪金
//返回值：{id: "001", name: "iphone7 plugs", imgurl: "img/ip7.jpg", price: "5899", sale: "5888", …}

function strToObj(str) {
	//	var str = str.slice(1);
	var arr = str.split('&');
	var obj = {};
	for (var i = 0; i < arr.length; i++) {
		var arr2 = arr[i].split('=');
		obj[arr2[0]] = arr2[1];
	}

	return obj;
}

//-----------------------------

//对象转成字符串方法封装

//传的参数：{id: "001", name: "iphone7 plugs", imgurl: "img/ip7.jpg", price: "5899", sale: "5888", …}
//返回值： id=001&name=iphone7 plugs&imgurl=img/ip7.jpg&price=5899&sale=5888&color=土豪金

function objToStr(obj) {
	var html = '';
	for (var key in obj) {
		html += key + '=' + obj[key] + '&';
	}

	html = html.slice(0, -1);
	return html;
}

/*
 	事件监听兼容性处理：
 	参数一：节点名
 	参数二：事件名称
 	参数三：事件处理函数
 	使用：bind(btn,click,function{
	???
 });
 */

function bind(ele, type, fn) {
	if (ele.addEventListener) {
		//ie9+ 主流
		ele.addEventListener(type, fn, false);
	} else {
		//ie8-
		ele.attachEvent('on' + type, fn);
	}

}
//-----------------------------------------------------------
/*
判断滚轮方向：rollerDir(ele)
参数：ele 对象名
	  callback 回调函数
返回值：true向上滚 false向下滚
使用:rollerDir（div,function(istrue){
	if（ok）{

	}else{

	}
}）；
	
*/
function rollerDir(ele, callback) {
	var istrue = true;
	//IE 谷歌
	ele.onmousewheel = fn;

	//火狐
	if (ele.addEventListener) {
		ele.addEventListener('DOMMouseScroll', fn, false);
	}

	function fn(ev) {
		//判断滚轮方向
		var ev = ev || event;
		//true:向上滚了，false：向下滚了
		if (ev.wheelDelta) {
			//ie 谷歌  规定：大于0 上滚，小于0下滚
			istrue = ev.wheelDelta > 0 ? true : false;
		} else {
			//火狐
			istrue = ev.detail < 0 ? true : false;
		}
		callback(istrue);
	}

}
//-----------------------------------------------------------
/*
封装一个函数，实现类似弹窗alert的效果；（自定义弹窗，能够传参数，比如宽度高度可以控制弹窗大小）
*/
//------------------------------------------------------------
/*
 	对象的深度拷贝
 
 */

function cloneDeep(obj) {
	var str = JSON.stringify(obj); //先把对象转成字符串
	var newobj = JSON.parse(str); //再把字符串转成对象
	return newobj;
}

//-----------------------------------------------------------
/*
	获取样式：可以获取行内和非行内样式
	参数一：obj 节点名
	参数二：name 属性名	
 
 * */

function getstyle(obj, name) {
	//获取样式(只能行内)
	if (obj.currentStyle) {
		//ie8-
		return obj.currentStyle[name];
	} else {
		//主流浏览器
		return getComputedStyle(obj, false)[name];
	}
}
//------------------------------------------------------
/*
 	设置和获取行内样式：css(节点,'width','40px') 设置样式  css(节点，'color') 获取样式
 	两个个参数：获取行内样式
 	三个参数：设置样式
*/

function css() {//设置样式：设置行内的样式
	if (arguments.length == 2) {
		//获取样式
		return arguments[0].style[arguments[1]];
	} else if (arguments.length == 3) {
		arguments[0].style[arguments[1]] = arguments[2];
	}
}
//-----------------------------------------------------------
/*
	运动框架封装：startMove()过渡    jq animate()
	最终版：多对象，多属性，链式运动框架(运动队列)
	参数一：对象名
	参数二：属性，目标值  键名：属性名，键值：目标值    {'width':200,'heigth':400}  实现：宽度和高度一起改变，宽度变成200，高度变成400
	参数三：回调函数(可选参数)
 */

function startMove(obj, json, fnend) {

	clearInterval(obj.timer); //防止定时器叠加
	obj.timer = setInterval(function () {

		var istrue = true;

		//1.获取属性名，获取键名：属性名->初始值
		for (var key in json) {
			//			console.log(key); //width heigth opacity
			var cur = 0; //存初始值

			if (key == 'opacity') { //初始值
				cur = getstyle(obj, key) * 100; //透明度
			} else {
				cur = parseInt(getstyle(obj, key)); //width heigth borderwidth px为单位的

			}

			//2.根据初始值和目标值，进行判断确定speed方向，变形：缓冲运动
			//距离越大，速度越大,下面的公式具备方向
			var speed = (json[key] - cur) / 6;
			speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed); //不要小数部分，没有这句话或晃动

			if (cur != json[key]) { //width 200 heigth 400
				istrue = false; //如果没有达到目标值，开关false
			} else {
				istrue = true; //true true
			}

			//3、运动
			if (key == 'opacity') {
				obj.style.opacity = (cur + speed) / 100;
				obj.style.filter = 'alpha(opacity:' + (cur + speed) + ')';
			} else {
				obj.style[key] = cur + speed + 'px'; //针对普通属性 left  top height 
			}

		}

		//4.回调函数:准备一个开关,确保以上json所有的属性都已经达到目标值,才能调用这个回调函数
		if (istrue) { //如果为true,证明以上属性都达到目标值了
			clearInterval(obj.timer);
			if (fnend) {
				fnend();
			}
		}

	}, 30); //obj.timer 每个对象都有自己定时器
}
//-------------------------------------------------------
function animate(obj, json, callback) {
	if (obj.isMoving == true) {
		return;
	} else {
		obj.isMoving = true;
	}
	clearTimer();//清除所有定时器

	obj.timerlist = {};
	//为每一个属性添加一个定时器
	for (var attr in json) {
		(function (attr) {
			obj.timerlist[attr] = setInterval(function () {
				//首先得到当前值
				if (attr == "opacity") {
					iNow = parseInt(parseFloat(getStyle(obj, attr)) * 100);
				} else {
					iNow = parseInt(getStyle(obj, attr));
				}
				//根据目标值，计算需要的速度
				speed = (json[attr] - iNow) / 8;
				speed > 0 ? speed = Math.ceil(speed) : speed = Math.floor(speed);

				//当到达目标值时，停止定时器
				if (iNow == json[attr]) {
					clearInterval(obj.timerlist[attr]);
					delete obj.timerlist[attr];
					if (getObjLength(obj.timerlist) == 0) {//所有定时器已停止
						obj.isMoving = false;
						callback ? callback() : "";
					}
				} else {
					//根据速度，修改当前值
					if (attr == "opacity") {
						obj.style.opacity = (iNow + speed) / 100;
						obj.style.filter = "alpha(opacity=" + (iNow + speed) + ")";
					} else {
						obj.style[attr] = iNow + speed + "px";
					}
				}
			}, 30);
		})(attr);
	}

	function clearTimer() {
		for (var i in obj.timerlist) {
			clearInterval(obj.timerlist[i]);
		}
	}
	function getStyle(obj, attr) {
		if (obj.currentStyle) {
			return obj.currentStyle[attr];
		} else {
			return getComputedStyle(obj, null)[attr];
		}
	}
	function getObjLength(obj) {
		var n = 0;
		for (var i in obj) {
			n++;
		}
		return n;
	}
}
//-------------------------------------------------------
/*
 checkReg:函数可以进行表单验证
 使用：
 	checkReg.trim() :去掉前后空格
 	checkReg.tel() :号码
 
 */

var checkReg = {
	trim: function (str) { //去掉前后空格
		var reg = /^\s+|\s+$/g;
		return str.replace(reg, '');
	},
	tel: function (str) { //号码
		var reg = /^1[3-9]\d{9}$/
		return reg.test(str);
	},
	email: function (str) { //邮箱正则:a_a2-+.s @ a_a+2-.s  .s_a2
		var reg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/; //网上推荐
		return reg.test(str);
	},
	idcard: function (str) { //身份证
		var reg = /^(\d{17}|\d{14})[\dX]$/;
		return reg.test(str);
	},
	psweasy: function (str) { //6-18位首字母开头
		var reg = /^[a-zA-Z]\w{5,17}$/;
		return reg.test(str);
	},
	pwwagain: function (str1, str2) {
		return str1 === str2; //全等 恒等
	},
	urladr: function (str) {
		var reg = /[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+\.?/;
		return reg.test(str);
	},
	name: function (str) { //账号字母开头,6-20位
		var reg = /^[a-zA-Z][\w\-]{5,19}$/;
		return reg.test(str);
	},
	chinese: function (str) {
		var reg = /^[\u2E80-\u9FFF]+$/;
		return reg.test(str);
	},
	birthday: function (str) {
		var reg = /^((((19|20)\d{2})-(0?[13-9]|1[012])-(0?[1-9]|[12]\d|30))|(((19|20)\d{2})-(0?[13578]|1[02])-31)|(((19|20)\d{2})-0?2-(0?[1-9]|1\d|2[0-8]))|((((19|20)([13579][26]|[2468][048]|0[48]))|(2000))-0?2-29))$/;
		return reg.test(str);
	}
}

/*
 	封装cookie函数:
 	存: Cookie.set()
 	取:	Cookie.get()
 	删: Cookie.remove()
 */

var cookie = {

	set: function (name, value, prop) { //设置cookie
		//存数据到cookie里面:必写的
		var str = name + '=' + value;

		//prop存json数据，json存后面一些可选参数
		//expires:设置失效时间
		if (prop.expires) {
			str += ';expires=' + prop.expires.toUTCString(); //把时间转成字符串
		}

		//设置path路径

		if (prop.path) {
			//如果设置了
			str += ';path=' + prop.path;
		}

		//domain设置可访问cookie的域名
		if (prop.domain) {
			str += ';domain=' + prop.domain;
		}

		//写到cookie
		document.cookie = str;

	},
	get: function (key) {
		var cookies = document.cookie; //name=tiantian; age=18; usn=yuanyuan; pws=456123
		var arr = cookies.split('; '); //['name=tiantian','age=18','usn=yuanyuan','pws=456123']
		for (var i = 0; i < arr.length; i++) {
			var arr2 = arr[i].split('='); //['name','tiantian']
			if (key == arr2[0]) {
				return arr2[1];
			}
		}
	},
	remove: function (key) {

		//删的原理:设置过期时间
		var now = new Date();
		now.setDate(now.getDate() - 1);
		this.set(key, 'no', {
			expires: now
		});
	}
}

/*
 
3、js 特效

 1）、开定时器，让图片运动：旧图挪走，新图进入可视区
 2）、(鼠标经过停止)点击上下按钮：可以切换下一张和上一张
 3）、焦点跟随，点击焦点可以切到对应的图片
 
 做插件：把代码封装，把不同的地方做成参数
 
 * */

function sliderImg(id, special) {

	var slideimg = getid(id); //最大盒子
	var ul = slideimg.children[0].children[0];
	var alis = ul.children;
	var iW = alis[0].offsetWidth; //获取一个图片的宽度
	var num = 0; //可视区内图片下标，当前的那张
	var light = slideimg.children[1];
	var aspan = light.children; //焦点
	var pis = slideimg.children[2];
	var prevImg = pis.children[0]; //上一张
	var nextImg = pis.children[1]; //下一张

	//	console.log(aspan.length);

	//1.图片都在右侧
	for (var i = 0; i < alis.length; i++) {
		alis[i].style.left = iW + 'px';
	}

	//2.第一个图放到可视区
	alis[0].style.left = 0;

	//3、不断的轮下一张，开定时器：旧图挪走，新图进入可视区
	var timer = null;
	clearInterval(timer);
	timer = setInterval(next, 2000); //每隔2秒切一张图

	function next() { //切一个图片
		//旧图挪走 num=0
		startMove(alis[num], {
			'left': -iW
		});

		//新图进入可视区  num=1,先把新图放在右侧，再挪进来
		//		num++;
		num = ++num >= alis.length ? 0 : num;
		alis[num].style.left = iW + 'px';
		startMove(alis[num], {
			'left': 0
		}); //挪到可视区

		spanAvtive();

	}

	function prev() {
		//旧图挪到右侧 num 0
		startMove(alis[num], {
			'left': iW
		});
		//新图快速放到左侧，再挪进可视区
		//		num--; //num 5
		num = --num < 0 ? alis.length - 1 : num;
		alis[num].style.left = -iW + 'px';
		startMove(alis[num], {
			'left': 0
		}); //可视区
		spanAvtive(); //焦点跟随
	}

	//4、鼠标经过停止，鼠标离开继续轮播
	slideimg.onmouseenter = function () {
		clearInterval(timer); //鼠标经过清除定时器
	}

	slideimg.onmouseleave = function () {
		clearInterval(timer); //放在定时器叠加
		timer = setInterval(next, 2000);
	}

	//5.点击上下按钮：可以切换下一张和上一张
	prevImg.onclick = function () {
		//上一张
		prev();
	}

	nextImg.onclick = function () {
		//下一张
		next();
	}

	//6、焦点跟随，点击焦点可以切到对应的图片
	function spanAvtive() {
		for (var i = 0; i < aspan.length; i++) {
			aspan[i].className = '';
		}
		aspan[num].className = special;
	}
	//点击焦点可以切到对应的图片
	for (var i = 0; i < aspan.length; i++) {
		aspan[i].index = i;
		aspan[i].onclick = function () {
			//给每一个焦点绑定点击事件
			var index = this.index;

			//判断方向
			if (index > num) {
				//从右边切到可视区
				//旧图 num 挪到左边
				startMove(alis[num], {
					'left': -iW
				});
				//新图 index 先放在右侧，再挪进可视区
				alis[index].style.left = iW + 'px';
				startMove(alis[index], {
					'left': 0
				});
				num = index;
				spanAvtive();
			}
			if (index < num) {
				//从左边切入
				//旧图挪到右侧
				startMove(alis[num], {
					'left': iW
				});
				//新的快速放左边，再进入可视区  index
				alis[index].style.left = -iW + 'px';
				startMove(alis[index], {
					'left': 0
				});
				num = index;
				spanAvtive();
			}
		}
	}

}
/*
 	设置配置参数和默认参数的关系：有配置参数用配置参数，没有就用默认参数
 	
 */

function extendObj(obj1, obj2) { //obj1 主角(配置参数)  obj2替补(默认参数)
	for (var key in obj1) {
		obj2[key] = obj1[key];
	}
}


/*
	ajax函数封装：要参数
		参数一：请求方式：get  post
		参数二：接口路径
		参数三：数据(可选)  name='tiantian'&psw=123456  传给后端的数据
		参数四：成功的回调函数(可选的)
 
*/

function ajax(method, url, data, fn) {
	//1.创建对象
	var xhr = new XMLHttpRequest();
	//告诉对象，要什么
	if (method == 'get' && data) {//如果是get的方式，data接在url后面
		//如果请求的地址是同一个地址，浏览器自动缓存
		url = url + '?day=' + new Date() + '&' + data;
	}

	xhr.open(method, url, true);

	//2.发送请求
	if (method == 'get') {
		xhr.send(null);
	} else {
		//设置请求头
		xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
		xhr.send(data);
	}

	//3.3号线去后台制作

	//4.号线。接收数据，做渲染

	xhr.onreadystatechange = function () {
		if (xhr.readyState == 4) {
			if (xhr.status == 200) {
				//个性需求
				if (fn) {
					fn(xhr.responseText);//实参
				}
			} else {
				alert('出错了，因为：' + xhr.status);//404找不到
			}

		}
	}
}
