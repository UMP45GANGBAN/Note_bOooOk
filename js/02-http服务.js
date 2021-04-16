//简单的httP服务


//1.加载Http模块
var http = require('http')

//2.使用http.createServer()方法创建一个web服务器
//返回一个Server实例
var server = http.createServer()

//3.服务器提供对数据的服务
//注册request，执行回调处理函数
server.on('request',function(){
	console.log('收到客户端请求')
})

//4.绑定端口号，启动服务器
server.listen(3001,function(){
	console.log('服务器启动成功')
})


//request 请求事件处理函数，需要接收两个参数
// Request是请求路径，即要访问的存放在服务器的资源文件夹
//例如localhost:3000/server_datebase/book
//response是响应函数，即要执行的函数
//一个请求对应一个响应，如果在一个请求的过程中，已经结束响应了，则不能重复发送响应
server.on('request',function(request,response){

	console.log('收到客户端请求，请求路径是：'+ request.url)
	response.write('hello')//服务器相应给客户端的函数
	response.end()//一定要写这条，否则服务端无法反馈response的结果给客户端
})

