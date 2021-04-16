// 本代码无法运行成功，因为缺少example.html


var http = require('http')
var server = http.createServer()
var fs = require('fs')
var dir='C:/Users/sx291/笔记/js/resource'  


server.on('request',function(req,res){          //设置输入服务器地址直接响应
    var url = req.url
    fs.readFile('/example.html',function (err,data) {  //示例html，其效果打开后会显示dir目录中的文件名超链接
        if(err)
        return res.end('404 NOT FOUND') //return可以阻止代码继续往后执行     
    
        //1.如何得到dir目录列表中的文件名和目录名
        //    fs.readdir
        //2.如何将得到的文件名和目录名替换到example,html中
        //    2.1在example.html中需要替换的位置预留一个特殊的标记。
        //    2.2根据files生成需要的HTML内容
        fs.readdir(dir, function (err, files){
            if(err) {
                return res.end ('Can not find www dir')
            }else {
                console.log(files)//files中是一个数组，里边包含目录的名字
                
                //生成需要替换的内容
                var content = ' '
                files.forEach(function (item) {  //item为dir目录中目录的数目
                    //在EcmaScript 6中的`字符串中，可以使用${}来引用变量
                    content +=
                    <tr>
                        {/* 实例程序   ${item}   */}
                    </tr>//${item}中就是每一个目录的名字
                })

                // //普通的字符串解析替换
                data = data.toString()//先把二进制数据转换为字符串
                data = data.replace('^_^', content)//在进行字符串的替换

                //发送解析替换过后的响应数据
                res.end(data)
            }
        })
    }) 
})

server.listen(3000,function(){
    console.log('服务器启动成功')
})


