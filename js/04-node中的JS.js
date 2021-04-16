/*-------------------Node中的JS-----------------------*/
/*node为JS提供了众多的服务器级别的API，这些API大多被包装到了一个具名的核心模块中
例如文件操作的JS模块，http服务的http模块，path路径操作模块，os操作系统模块

而要想调用这些模块，就要使用
var   fs     = require( '  fs  ' )
   变量名             模块名
此外，调用核心模块时变量名一般与模块名相同

更多模块详见官方文档
*/

//一些例子
//用来获取机器信息
var os = require('os')

//用来操作路径
//var path = require('path')

//获取当前机器cpu信息
console.log(os.cpus())

//memory内存
console.log(os.totalmem())

//------------------本页代码应在cmd中运行---------------------//