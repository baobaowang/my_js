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







