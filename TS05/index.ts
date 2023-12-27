// 1、函数定义类型和返回值 | 箭头函数定义类型和返回值

// function add(a:number,b:number):number {
//   return a + b
// }

// const add = (a:number,b:number):number => {
//   return a + b
// }

// console.log(add(1,1));

// 2、函数默认参数 | 函数可选参数

// function add(a?: number, b: number = 20): number {
//   return a + b
// }

// console.log(add(2));

// 3、参数是一个对象如何定义

// interface User {
//   name: string
//   age: number
// }

// function add(user:User):User {
//   return user
// }

// console.log(add({ name: "kk", age: 30 }));


// 4、函数this类型

interface Obj {
  user:number[]
  add:(this:Obj,num:number)=>void
}

// ts 可以定义this的类型 在js无法使用 必须是第一个参数定义this的类型
let obj:Obj = {
  user:[1,2,3],
  add(this:Obj,num:number) {
    this.user.push(num)
  }
}

obj.add(4)

// console.log(obj);

// 5、函数重载

let user:number[] = [1,2,3]

function findNum(add:number[]):number[] //如果传的是一个number类型的数组就做添加
function findNum(id:number):number[] //如果传的是id就是单个查询
function findNum():number[] //如果没有传就查询全部
function findNum(ids?:number | number[]):number[] {
  if (typeof ids  === 'number') {
    return user.filter(ele=>ele == ids)
  } else if (Array.isArray(ids)) {
    user.push(...ids)
    return user 
  } else {
    return user
  }
}

console.log(findNum([4,5,6]));



