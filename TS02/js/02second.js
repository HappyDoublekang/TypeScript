"use strict";
// 1.字符串类型
var aName = '貂蝉';
// 2.数值类型
var dAge = 18;
dAge = 18.13;
dAge = -17;
// 3.布尔值类型 false/true
var isSingleDog = true;
isSingleDog = false;
// 4.undefined 和 null
var undef = undefined;
var nul = null;
// 5.数组
var arrJs = [1, 'a', true, [], {}];
var arrHero = ['貂蝉', '安其拉', '大乔'];
var arrJson = [{ value: '选项1', label: '黄金糕' }];
// 6.泛型
var arrHeroAge = [18, 21, 27];
var arrJson2 = [{ value: '选项1', label: '黄金糕' }];
// 7.元组（tuple）：就是一个已知元素数量和每个元素类型的数组，内部元素类型不必相同，数量必须一致
var tupl = ['讨厌', 18, true];
tupl = ['死鬼', 17, false];
// 访问元组中元素和长度
console.log(tupl[0]);
console.log(tupl.length);
// 8.枚举（enum）：用一组标识来代表数值
// 8.1创建性别枚举
var Gender;
(function (Gender) {
    Gender[Gender["Boy"] = 1] = "Boy";
    Gender[Gender["Girl"] = 2] = "Girl";
    Gender[Gender["unknown"] = 3] = "unknown";
})(Gender || (Gender = {}));
console.log(Gender.Boy);
console.log(Gender.Girl);
console.log(Gender.unknown);
var Gender2;
(function (Gender2) {
    Gender2[Gender2["Boy"] = 0] = "Boy";
    Gender2[Gender2["Girl"] = 1] = "Girl";
    Gender2[Gender2["unknown"] = 2] = "unknown";
})(Gender2 || (Gender2 = {}));
console.log(Gender2.Boy);
console.log(Gender2.Girl);
console.log(Gender2.unknown);
// 8.2使用性别枚举
var useSex = Gender.Boy;
console.log(useSex);
// 9.any任意类型（一般在获取dom时使用）
var txtName = document.getElementById('txtN');
// 10.void代表没有类型，一般用在无返回值得函数
function sayHi() {
    console.log('11111');
}
sayHi();
function sayHi2() {
    return 'wowowo';
}
var re2 = sayHi2();
// 11.never类型代表不存在值的类型，抛出异常或者无限循环函数返回类型
function test() {
    while (true) {
    }
}
function test2() {
    throw new Error('抛出异常');
}
// never是底部类型可以赋值给任意类型
var x = test();
var y = test();
// 12.联合类型
var xxx = 'wowow';
