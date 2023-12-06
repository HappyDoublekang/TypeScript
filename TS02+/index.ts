// 大写的Object(可以赋值任意类型)
let a:Object = {}
let a1:Object = 123
let a2:Object = '123'

// 小写的object
let b:object = '123' // 错误 原始类型
let b1:object = 123  // 错误 原始类型
let b2:object = false // 错误 原始类型
let b3:object = [] // 正确
let b4:object = {} // 正确
let b5:object = () => 123 // 正确

// 字面量模式(可以赋值任意类型但是只读)
let c:{} = 123 // new Object
let c1:{} = '123'
let c2:{} = []
let c3:{} = {name:1}

c3.age = 2 // 错误