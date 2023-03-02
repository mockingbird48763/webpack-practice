import HomeList from "./HomeList"
// 異步載入
// nav = remotes.nav
// Header = exposes
// 拼成資源路徑
import('nav/Header').then((Header) => {
  const body = document.createElement('div')
  // 編寫模塊時就是 export default Header
  body.appendChild(Header.default())
  document.body.appendChild(body)
  document.body.innerHTML += HomeList(5)
})
