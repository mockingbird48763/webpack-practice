// 放置專門線程的代碼
// 接收主線程發來的訊息
self.onmessage = (message) => {
  // 訊息處理返回給主線程
  // 這個方法可以把數據返回
  self.postMessage({
    answer: 111
  })
}