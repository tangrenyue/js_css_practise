//javascript 实现
function Singleton(name) {
  this.name = name;
  this.instance = null;
}

Singleton.prototype.getName = function () {
  console.log(this.name);
};

Singleton.getInstance = function (name) {
  if (!this.instance) {
    this.instance = new Singleton(name);
  }
  return this.instance;
};

var a = Singleton.getInstance('a');
var b = Singleton.getInstance('b');
console.log(a === b); //true
console.log(a.getName(), b.getName()); //a a


//ES6 实现
class Singleton {
  constructor(name) {
    this.name = name;
  }
  static getInstance(name) {
    // ES6中可以使用static方法代替闭包存储单例
    if (!Singleton.instance) {
      Singleton.instance = new Singleton(name)
    }
    return Singleton.instance;
  }
  getName() {
    return this.name;
  }
}
const a = Singleton.getInstance('a');
const b = Singleton.getInstance('b');
console.log(a === b); //true
console.log(a.getName() === b.getName()); //true
console.log(a.getName(), b.getName()); //a a