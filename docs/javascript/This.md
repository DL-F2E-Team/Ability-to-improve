---
title: This
---

# this

* 一般函数
  - 匿名函数调用或者全局函数调用，`this`指向Window、Global
  - 严格模式下全局函数调用 `this`指向undefined
* 构造函数
  - 构造函数调用，`this`指向这个实例对象  
* 对象方法
  - 对象方法调用，`this`指向当前对象
* DOM事件绑定
  - onclick和addEventerListener中this默认指向绑定事件的元素
  - IE中使用attachEvent,里面的this默认指向window  
* .call()、.apply()和.bind() 
  - 显示绑定，`this`指向绑定的值
* 箭头函数
  - 箭头函数中始终会捕捉其“定义时”所在上下文的`this`值，作为自己的`this`.

```js
function(){
    console.log(a)
    var a;
}
```