// let a:number = 999
// console.log(a);

// any 任意类型 unknown 不知道类型
// 1.top type 顶级类型 any unknown
// 2.Object
// 3.Number String Boolen
// 4.Number String Boolen
// 5.   1     '康'  false
// 6.never
// unknown 只能赋值给自身或者any
// unknown 没办法读任何属性，方法也不可以调
// unknown比any更加安全

let a:any = {}

a = 1
a = '222'
a = false
a = Symbol(1)


let b:number = 5

a = b
b = a

// let kk:unknown = { 帅: true, open:() => 123  }
let kk:any = { 帅: true, open:() => 123  }

console.log(kk);
console.log(kk.帅);



