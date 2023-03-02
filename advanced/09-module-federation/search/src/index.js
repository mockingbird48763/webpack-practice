// search 本身不提供功能
// 而是使用 nav 和 homelist
// 實現兩個異步資源的並行的使用
Promise.all([import('nav/Header'), import('home/HomeList')])
  .then(([{default: Header}, {default: HomeList}]) => {
    document.body.appendChild(Header())
    document.body.innerHTML += HomeList(3)
  })