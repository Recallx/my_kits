//这里面就是封装我们的常用的代码
var kits = {}
//封装一个获取随机整数函数的方式
kits.randonInt = function(n,m){
    return Math.floor(Math.random() * (m - n + 1 )+ n )
}