// 編譯一些 ES6 程式碼
class A {
  constructor() {
    this.a = 100
  }

  printA() {
    console.log(this.a)
  }
}

const a = new A()
a.printA()