var http = require('http')


//1.创建server
var server = http.createServer()

//2.监听request请求事件，设置请求处理函数
server.on('request',function(req,res){
    console.log('请求收到')

    //获得访问本服务器的用户的Ip地址和其访问端口
    console.log('请求我的客户端的端口号是： ', req.socket.remoteAddress, req.socket.remotePort)

    //80为http服务默认端口号

    
    //创建变量存储url
    var url = req.url

    // //设置if,else
    // //按照请求的url响应界面
    // if(url === '/'){
    //     res.end('welcome')
    // }else if(url === ''/login){
    //     res.end('login')
    // }else{
    //     res.end('404 not found')
    // }

    
    if(url === '/products'){
        //创建数组
        var products=[
            {
                name:'Iphone 10',//注意数组中元素之间用逗号隔开
                price:8000
            },//字符串之间也要用逗号隔开

            {
                name:'Iphone 12',//注意数组中元素之间用逗号隔开
                price:60000
            },

            {
                name:'Iphone 15',//注意数组中元素之间用逗号隔开
                price:1843
            }
        ]

        //响应返回的对象只能是字符串和二进制
        res.end(JSON.stringify(products))//JSON.stringify方法可以将数组转换为字符串
    }

    // //一步式响应
    // res.end('hello world')

})

//3.绑定端口号，启动服务
//80是浏览器的默认端口号 即地址栏输入http://localhost即可
server.listen(80,function(){
    console.log('服务器启动成功')
})


