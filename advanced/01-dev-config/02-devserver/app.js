// 一般情況不寫域名
fetch('/api/hello')
  .then(res => res.text())
  .then(result => {
    console.log(result)
    const temp = document.createElement('div')
    temp.innerHTML = result
    document.body.appendChild(temp)
  })

