import helloWorld from './hello-world'
import imgsrc from './assets/img-1.png'
import logoSvg from './assets/img-2.svg'
import exampleTxt from './assets/example.txt'
import jpgMap from './assets/img-3.jpg'
import './style.css'
import './style.less'
import Data from './assets/data.xml'
import Notes from './assets/data.csv'
import toml from './assets/data.toml'
import yaml from './assets/data.yaml'
import json5 from './assets/data.json5'
import _ from 'lodash'
import './async-module.js'

helloWorld()

const img = document.createElement('img')
img.src = imgsrc
document.body.appendChild(img)

const img2 = document.createElement('img')
img2.style.cssText = 'width: 600px; height: 200px'
img2.src = logoSvg
document.body.appendChild(img2)

const block = document.createElement('div')
block.style.cssText = 'width: 200px; height: 200px; background: aliceblue'
block.classList.add('block-bg')
block.textContent = exampleTxt
document.body.appendChild(block)

const img3 = document.createElement('img')
img3.style.cssTest = 'display: block'
img3.src = jpgMap
document.body.appendChild(img3)

// 把 hello 模式加載進去
document.body.classList.add('hello')

const span = document.createElement('span')
span.classList.add('icon')
// 顯示對應的 unicode 的 icon
span.innerHTML = '&#xe696;'
document.body.appendChild(span)

// 直接打印
// data.xml 轉換成一個 JS 對象
console.log(Data)
// data.csv 轉換成一個數組
console.log(Notes)

console.log(toml.title)
console.log(toml.owner.name)

console.log(yaml.title)
console.log(yaml.owner.name)

console.log(json5.title)
console.log(json5.owner.name)

console.log(_.join(['index', 'module', 'loaded'], ' '))

const button = document.createElement('button')
button.textContent = '點擊執行加法運算'
button.addEventListener('click', () => {
  // 動態導入的模塊，會被單獨的處理出去
  // 多出一個 src_math_js.bundle.js
  // 通過 network 可以發現按鈕被點擊，才會下載這個文件
  // 這個模塊在頁面第一次加載並不加載
  // 通過魔法註釋可以改變包名
  // 變成 math.bundle.js
  import(/* webpackChunkName: 'math', webpackPreload: true */'./math.js').then(({ add }) => {
    console.log(add(4, 5))
  })
})
document.body.appendChild(button)

