// 引入 worker
const worker = new Worker(new URL('./work.js', import.meta.url))

// 把數據發送給 worker
worker.postMessage({
  question: 'hi，那邊的 worker 線程，請告訴我答案'
})

// 接受 worker 返回的數據
worker.onmessage = (message) => {
  console.log(message.data.answer)
}