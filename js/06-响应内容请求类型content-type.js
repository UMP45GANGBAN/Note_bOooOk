var http = require('http')
var server=http.createServer()
server.on('request',function(req,res){
    //服务端默认发送的数据是utf8的内容
    //但是浏览器不知道你是utf8编码的内容
    //浏览器在不知道服务器相应内容的编码的情况下会按照当前操作系统的默认编码去解析
    //中文操作系统默认是gbk

    //解决办法就是正确的告诉浏览器我给你发送的内容是什么编码的
    //在http协议中，Content-Type就是告诉对方我给你发送的数据内容是什么类型
    //  text/plain是普通文本的意思，用于解决普通文本的乱码
    // res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    // res.end('hello 世界')
    var url =req.url
    
    if(url==='/plain'){
        res.setHeader('Content-Type', 'text/plain; charset=utf-8')
        res.end('hello 世界')
    }else if(url==='/html'){
        //告诉浏览器你发送的是html格式的字符串
        res.setHeader('Content-Type', 'text/html; charset=utf-8')
        res.end('<p>hello html <a href="">点我</a></p>')
    }

})

server.listen(3000, function(){
    console.log( 'server is running' )
})