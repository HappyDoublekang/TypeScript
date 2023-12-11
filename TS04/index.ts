// number[]
// let arr:number[] = [1,2,3,4]
// 泛型方式
// let arr:Array<boolean> = [true,false]
// 大杂烩
// let arr:[number,string,boolen,{}] = [1,"2",false,{}]

// 定义对象数组使用interface

// interface x {
//   name:string,
//   age?:number
// }

// let arr:x[] = [{name: "kk",age: 111},{name: "xxx",age: 222}]

// 二维数组：只有一种类型（套娃方式）
// let arr:number[][] = [[1],[2],[3]]
// let arr:Array<Array<number>> = [[1],[2],[3]]

// 二维数组：大杂烩方式（any[]）
// let arr:any[] = [[{name:"11",age:2}],["11",22]]


function a1(...args:any[]) {
  console.log(args);
  console.log(arguments);
  let a:IArguments = arguments.callee
  // let a:A = arguments
}

a1(1,2,3)

interface A {
  callee:Function
  length:number
  [index:number]:number
}









