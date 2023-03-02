// 引入才會被打包
import './style.css'
import './input.js'

const button = document.createElement('button')
button.textContent = '添加'
button.addEventListener('click', () => {
  const div = document.createElement('div')
  div.classList.add('square')
  document.body.appendChild(div)
})
document.body.appendChild(button)

// 全局 module
// devServer.hot
if (module.hot) {
  // 接受一個文件，當這個文件發現變化，就可實現熱替換
  module.hot.accept('./input.js', () => {
    // 這個回調函數，可以在代碼更新後，做自動調用
  })
}