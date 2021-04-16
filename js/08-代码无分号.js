// JS中有多种代码规范
// 例如JavaScript Standard Style、Airbnb JavaScript Style两种社区代码规范

function say() {
    console.log('hello world')
}

say()

;(function(){
    console.log('hello')
})()

//当一行代码是以：
//     (
//     [
//     ` 反引号
//     开始的时候，则在前边不上一个分号用以避免一些语法解析错误


// `是ES6新增的一种字符串包裹方式，叫做模板字符串
//它支持换行和非常方便拼接变量
var foo = `
A
B
C`
console.log(foo)