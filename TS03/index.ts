// interface 重名 重合
// interface 任意key
// interface ? readonly
// interface 接口继承
// interface 定义函数类型

// 不能多属性 也不能少属性
interface Axx extends B {
  name:string
  age?:number,
  readonly id:number,
  readonly cb:()=>boolean
}

interface Axx{
  Ikun:string
  [propName:string]:any // 未知不确定属性索引签名
}

interface B{
  xxx:string
}

let a:Axx = {
  name:"kk",
  age:88,
  Ikun:"cxk",
  id:1,
  cb:()=>{
    return false
  },
  xxx:"xxx",
  a:1,
  b:"3",
  c:4
}

// a.cb = ()=>{return true}

interface Fn {
  (name:string):number[]
}

const fn:Fn = function (name:string) {
  return [1]
}