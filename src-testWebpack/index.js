import indexCss from './public/css/index.css'//引入刚写的那个css文件
import imgSrc from './public/imgs/03.jpg'//本质是拿到图片路径
let pp = document.createElement('p');

// 这里随便写，只是为了测试打包后这个js文件是否有用
pp.innerText = '静怡脱于繁华，善良穿于暗途'
//把p放到刚那个标签里面去
document.getElementById('root').appendChild(pp)


let myFunc = ()=>{
    console.log('heihei')
}
myFunc()

//创建图片
let imgNode = new Image()//创建了一个image标签
imgNode.src = imgSrc

document.getElementById('root').appendChild(imgNode)//把图片也转为模块化


let a = 200
console.log(a)