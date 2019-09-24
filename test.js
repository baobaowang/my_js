console.log(document.getElementById("a"))//根据id获取
console.log(document.getElementsByTagName("h3"))//根据标签名获取,返回的是数组
console.log(document.getElementsByClassName('b'))//根据类名获取,返回的也是数组


//遍历p里面的title属性
var paras = document.getElementsByTagName('p');
for (var i=0;i<paras.length;i++)
{
    console.log(paras[i].getAttribute('title'))//getAttribute()函数,参数是需要查询的属性
    paras[i].setAttribute('title','我是改变后的title属性值')//setAttribute()函数,第一个参数是哪个属性,第二个是需要改的属性值
    console.log(paras[i].getAttribute('title'))
}

//替换图片
//先获取替换源标签,再获取被替换的id,最后用属性替换
function showPic(whichpic)
{
    var source = whichpic.getAttribute('href')
    var placeholder = document.getElementById('placeholder')
    placeholder.setAttribute('src',source)
    //placeholder.src=source  非DOM解决方案
    var text = whichpic.getAttribute('title')
    var description = document.getElementById('description')
    description.firstChild.nodeValue = text
}

function countBodyChildren()
{
    var body_element = document.getElementsByTagName("body")[0];
}
window.onload = countBodyChildren
//不带括号的函数,理解为c里的指针,需要时再调用,执行
//带括号的函数直接执行,计算



