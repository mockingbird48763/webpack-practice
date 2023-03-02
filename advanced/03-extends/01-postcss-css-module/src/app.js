// CSS 的對象引用
import style from './app.css'

// {box: 'jiiwoQM4RBXA8T7kGVrB'}
console.log(style)

const div = document.createElement('div')
div.textContent = 'hello postcss'
// 這樣才能正確引入樣式
div.classList.add(style.box)
document.body.appendChild(div)