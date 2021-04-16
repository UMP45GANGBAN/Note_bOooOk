//加载文件操作模块
var fs= require('fs')

//写文件操作
//第一个参数：文件路径
//第二个参数：文件内容
//第三个参数：回调函数
fs.writeFile('./date/你好.txt','hello world',function(error){
    console.log('文件写入成功')
})

//读文件操作
fs.readFile('./date/你好.txt',function(error,date){
    if(error)
    console.log(error)//报出错误信息
    else
    console.log(date.toString())//将文件内容显示出来
})