var http = require('http')

var server = http.createServer()

var fs = require('fs')

var dir='C:/Users/sx291/笔记/js/resource'  //注意要转换成反斜杠
var filepath = '/index.html'   //斜杠不能忘
//一个请求对应一个响应，如果在一个请求的过程中，已经结束响应了，则不能重复发送响应
server.on('request',function(req,res){
    var url = req.url
    if(url==='/test') {
        fs.readFile(dir + '/index.html',function (err,data) {        //index.html前斜杠不能忘
            if(err)
            return res.end('404 NOT FOUND') //return可以阻止代码继续往后执行
            else
            res.end(data)
        }) 
    }

    //or
    if(url===filepath) {
        fs.readFile(dir + filepath,function (err,data) {
            if(err)
            return res.end('404 NOT FOUND')
            else
            res.end(data)
        }) 
    }
})

server.listen(3000,function(){
    console.log('服务器启动成功')
})


