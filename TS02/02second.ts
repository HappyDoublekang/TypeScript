// 1.字符串类型
let aName:string = '貂蝉'

// 2.数值类型
let dAge:number = 18
dAge = 18.13
dAge = -17

// 3.布尔值类型 false/true
let isSingleDog:boolean = true
isSingleDog = false

// 4.undefined 和 null
let undef:undefined = undefined
let nul:null = null

// 5.数组
let arrJs = [1, 'a', true, [], {}]

let arrHero:string[] = ['貂蝉', '安其拉', '大乔']
let arrJson:any[] = [{ value: '选项1', label: '黄金糕' }]

// 6.泛型
let arrHeroAge:Array<number> = [18, 21, 27]
let arrJson2:Array<any> = [{ value: '选项1', label: '黄金糕' }]

// 7.元组（tuple）：就是一个已知元素数量和每个元素类型的数组，内部元素类型不必相同，数量必须一致
let tupl:[string, number, boolean] = ['讨厌', 18, true]
tupl = ['死鬼', 17, false]

// 访问元组中元素和长度
console.log(tupl[0])
console.log(tupl.length)

// 8.枚举（enum）：用一组标识来代表数值
// 8.1创建性别枚举
enum Gender {
    Boy = 1,
    Girl = 2,
    unknown = 3
}

console.log(Gender.Boy)
console.log(Gender.Girl)
console.log(Gender.unknown)

enum Gender2 {
    Boy,
    Girl,
    unknown
}

console.log(Gender2.Boy)
console.log(Gender2.Girl)
console.log(Gender2.unknown)

// 8.2使用性别枚举
let useSex:Gender = Gender.Boy
console.log(useSex)

// 9.any任意类型（一般在获取dom时使用）
let txtName:any = document.getElementById('txtN')

// 10.void代表没有类型，一般用在无返回值得函数
function sayHi():void {
    console.log('11111')
}
sayHi()

function sayHi2():string {
    return 'wowowo'
}
let re2 = sayHi2()

// 11.never类型代表不存在值的类型，抛出异常或者无限循环函数返回类型
function test():never {
    while(true) {

    }
}

function test2():never {
    throw new Error('抛出异常')
}

// never是底部类型可以赋值给任意类型
let x:never = test()
let y:string = test()

// 12.联合类型
let xxx:string | null = 'wowow'
