//实现不同模块的通信
//使用require方法
//模块有三种
//具名的核心模块，fs,http等
//自己写的
//相对路径必须加./
//文件后缀名可以省略

//在node中，没有全局作用域，只有模块作用域
//要想实现模块化通信，需要export
//export的作用时将模块内的方法封装成一个对象可供调用

//req方法有两个作用，一个是加载模块执行里面的代码
//另一个是加载被加载文件导出的接口对象

require('./b')

var fs = require('fs')
var bExports = require('./b')

//导出变量
console.log(bExports.foo)

//导出方法
console.log(bExports.add(10,30))

//比较
console.log(bExports.readFile('./a.js'))//此行代码与fs模块中的readFile不同。bExports中的readFile是在b.js中写的，不能文件读取
console.log(fs.readFile('./a.js',function(err,date){
    if(err)
    {console.log('error')}
    else
    {console.log(date.toString())}
}))