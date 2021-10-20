# 执行上下文、作用域和作用域链

## 作用域
作用域即**函数或变量的可见区域**。通俗点说，函数或者变量不在这个区域内，就无法访问到。

**块级作用域**和**函数作用域**也可以统称为局部作用域。

与函数作用域相对应的概念是**全局作用域**，也就是定义在最外层的变量或者函数，可以在任何地方访问到它们。

### 函数作用域
用函数形式以`function(){……}`类似的代码包起来的（省略号……）区域，即**函数作用域**。

### 块级作用域
ES6规定，在某个花括号对{ }的内部用**let关键字生声明的变量和函数拥有块级作用域**，
这些变量和函数它们只能被花括号对{ }的内部的语句使用，外部不可访问。

## 执行上下文（Execution Context）
执行上下文就是当前 JavaScript 代码被解析和执行时所在的环境，也叫作执行环境。