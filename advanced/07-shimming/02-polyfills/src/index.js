// import '@babel/polyfill'
// from 不是所有瀏覽器支持
// 使用 babel loader 無法百分百將代碼全部轉換成低版本瀏覽器能識別的代碼
// 例如 es6 轉成 es3.1
console.log(Array.from([1, 2, 3], x => x + x))