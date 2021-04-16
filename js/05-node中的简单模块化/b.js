console.log('b被执行')

var foo = 'bbb'

//导出变量
exports.foo = 'hello'//因为重新赋值了foo，所以执行的输出结果应为hello

//导出方法
exports.add = function(x,y){
    return x+y
}
function add(x,y){
    return x-y
}//此加法跟上方加法不是一个东西

exports.readFile = function(path,callback){
   console.log('文件路径：',path) 
}