# Let Const
Let 和 const 声明会形成块级作用域。

## `var` "缺陷"
1. 可以重复声明同名变量（闭包缓存）
2. 无法限制修改
3. 没有块级作用域（`{}`，`if () {}`, `for () {}`），作用域只在函数中有效`Function`。
4. 变量提升
5. 声明的变量会挂载在 window 上

## Let
Let 暂存死区

`Let` 栈内存

## Const
Const 一旦声明必须赋值，不能用 null 占位，声明后不能再修改，如果 声明的是复合类型数据，可以修改属性

`Const` 声明复合类型的数据（{}、[]）,变量指向内存地址。`Const` 栈内存储存的是堆内存的地址，堆内存储存了实际的数据