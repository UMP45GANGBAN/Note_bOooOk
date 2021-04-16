var http = require('http')
var fs = require('fs')
var server=http.createServer()

server.on('request',function(req,res){
    var url=req.url

    if(url==='/'){
        fs.readFile('./resource/index.html',function(err, data){ 
            if(err){
                res.setHeader('Content-Type', 'text/plain; charset=utf-8')
                res.end('文件读取失败')
            }else{
                //data默认是二进制数据，可以通过.toString转为人类能识别的字符串
                //res.end()支持两种数据类型，一种是二进制，一种是字符串
                res.setHeader('Content-Type', 'text/html; charset=utf-8')
                res.end(data)
            }
        })
    }

    if(url==='/jpg'){
        fs.readFile('./resource/violet.jpg',function(err, data){ 
            if(err){
                res.setHeader('Content-Type', 'text/plain; charset=utf-8')
                res.end('文件读取失败')
            }else{
                //更多Content-Type参考oschina开源中国
                res.setHeader('Content-Type', 'image/jpeg; charset=utf-8')
                res.end(data)
            }
        })
    }else if(url==='/test'){    /////////////////////////////////////////////用来测试是否能打开html,css和jpg联合网页   
        fs.readFile('./resource/CSStest/index.html',function(err, data){ 
            if(err){
                res.setHeader('Content-Type', 'text/plain; charset=utf-8')
                res.end('文件读取失败')
            }else{
                //更多Content-Type参考oschina开源中国
                res.setHeader('Content-Type', 'text/html; charset=utf-8')               
                res.end(data)
            }
        }) 
    }else if(url==='/style.css'){
        fs.readFile('./resource/CSStest/style.css',function(err, data){ 
            if(err){
                res.setHeader('Content-Type', 'text/plain; charset=utf-8')
                res.end('文件读取失败')
            }else{
                //更多Content-Type参考oschina开源中国
                res.setHeader('Content-Type', 'text/css; charset=utf-8')
                res.end(data)   
            }
        })
    }else {
        fs.readFile('./resource/CSStest/bg.jpg',function(err, data){ 
            if(err){
                res.setHeader('Content-Type', 'text/plain; charset=utf-8')
                res.end('文件读取失败')
            }else{
                //更多Content-Type参考oschina开源中国
                res.setHeader('Content-Type', 'image/jpeg; charset=utf-8')
                res.end(data)   
            }
        })
    }
})

server.listen(3000, function(){
    console.log( 'server is running' )
})