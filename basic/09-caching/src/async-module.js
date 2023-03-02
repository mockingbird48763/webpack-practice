function getComponent() {
  return import('lodash')
  // 這個函數拿到的就是載入的 loadsh 的一個引用
  // 解構 default 並取別名
  .then(({ default: _ }) => {
    const element = document.createElement('div')
    element.innerHTML = _.join(['Hello', 'webpack'], ' ')
    return element
  })
}

// 這裡最後取得 element 元素
getComponent().then((element) => {
  document.body.appendChild(element)
})