### 添加gitignore方法
1. 初始化git文件

```javaScript
git init
```
1. 输入命令，生成“.gitignore”文件

```javaScript
touch .gitignore
```
1. 打开.gitignore文件，根据需求进行配置.gitignore文件

* 忽略所有node_modules文件夹

```javaScript
node_modules/
```
### 拓展
其他些文件无需纳入 Git 的管理，也不希望它们总出现在未跟踪文件列表。 在这种情况下，我们可
以创建一个名为 .gitignore 的配置文件，列出要忽略的文件的匹配模式。
文件 .gitignore 的格式规范如下：
* ① 以 # 开头的是注释
* ② 以 / 结尾的是目录
* ③ 以 / 开头防止递归
* ④ 以 ! 开头表示取反
* ⑤ 可以使用 glob 模式进行文件和文件夹的匹配（glob 指简化了的正则表达式）

所谓的 glob 模式是指简化了的正则表达式：
① 星号 * 匹配零个或多个任意字符
② [abc] 匹配任何一个列在方括号中的字符 （此案例匹配一个 a 或匹配一个 b 或匹配一个 c）
③ 问号 ? 只匹配一个任意字符
④ 在方括号中使用短划线分隔两个字符， 表示所有在这两个字符范围内的都可以匹配（比如 [0-9] 表示匹配
所有 0 到 9 的数字）
⑤ 两个星号 ** 表示匹配任意中间目录（比如 a/**/z 可以匹配 a/z 、 a/b/z 或 a/b/c/z 等）

1. 忽略所有的.a文件

 ```javaScript
*.a
```
1. 但跟踪所有的lib.a, 即便你在前面忽略了.a文件

 ```javaScript
! lib.a
```
1. 只忽略当前目录下的TODO 文件，而不忽略subdir/T0DO

```
/TODO
```
1. 忽略任何目录下名为build的文件夹

```
build/
```
1. 忽略doc/notes. txt,但不忽略doc/server/arch. txt

```
doc/*. txt
```

1. 忽略doc/目录及其所有子目录下的.pdf 文件

```
doc/**/* . pdf
```


### 安装控制台直接运行ts文件操作
1. npm i ts-node -g
2. npm init -y 生成package.json
3. npm i @types/node -D 安装于package.json的node声明文件


### 拓展(安装nrm)
* 安装类似于nrm的源管理工具
1. npm i xmzs -g
2. mmp ls 选择安装npm的源镜像
3. mmp use 切换镜像
4. npm i ts-node -g