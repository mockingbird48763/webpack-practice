console.log('hello');

// 判斷瀏覽器是否支持 serviceWorker
if ('serviceWorker' in navigator) {
  // 在頁面加載資源後
  window.addEventListener('load', () => {
    // 參數是打包後的 service-worker.js
    navigator.serviceWorker.register('/service-worker.js')
      // 註冊成功的結果
      .then(registration => {
        console.log('SW 註冊成功', registration)
      })
      // 失敗時的處理
      .catch(registrationError => {
        console.log('SW 註冊失敗', registrationError)
      })
  })
}