//这里面就是封装我们的常用的代码
var kits = {}
//封装一个获取随机整数函数的方式
kits.randonInt = function(n,m){
    return Math.floor(Math.random() * (m - n + 1 )+ n )
}
//封装一个获取时间的效果
kits.formateDate = function(){
    let date = new Date;
    let y = date.getFullYear();
    let M = date.getMonth() + 1 ;
    let D = date.getDay();
    let S = date.getHours();
    let F = date.getMinutes();
    let m = date.getSeconds();
    return y + '-' + M + '-' + D + '  ' + S +':' + F + ':' + m ;
}
//封装一个获取随机数的函数
kits.randonInt = function(n,m){
    return Math.floor(Math.random() * (m - n + 1)+ n )
}
//封装一个可以获得id的方法
kits.primarykey = function(){
    let n = Date.now();
    //防止id重复，设置一个大的值
    let r = kits.randonInt(100000,999999);
    //把获得的两个结果拼接起来
    return n + '' + r;
}