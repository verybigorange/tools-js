# 更新内容

### 0.1.8
- 2019.2.26
  - 修复`isPhone`的bug
### 0.1.7
- 2019.1.10
  - 新增`binaryString`
  - 修复`babelHelper`的bug

### 0.1.6
- 2019.1.9
  - 新增`utils`中方法:
    - `unique`
    - `setCookie`
    - `getCookie`
    - `removeCookie`

### 0.1.5
- 2019.1.8
  - 新增`utils`中方法:
    - `flatten`
    - `curry`

### 0.1.4
- 2019.1.8
  - 新增`utils`中方法:
    - `dateFormat`
    - `deviceIsMobile`
    - `deviceIsAndroid`
    - `deviceIsIOS`
    - `once`

### 0.1.3
- 2019.1.4
  - 修复`$$shift`的报错。

### 0.1.2
- 2019.1.3
  - 用`cjs`替换`umd`打包。

### 0.1.0
- 2019.1.3
  - 由于包太大，放弃用Facebook的immutable重构方案。
  - 采用`immer`将`Map`和`List`的方法全部重构。

### 0.0.9
- 2019.1.2
  - 新增`exp`正则判断。

### 0.0.8
- 2019.1.2
  - 新增`Map`的操作方法。

### 0.0.7
- 2019.1.2
  - 将数组的方法采用Facebook的immutable重构，提升性能。
  - 废除之前版本的全部数组方法。
  - 将打包输出从`cjs`改成`umd`

### 0.0.6
- 2018.12.29
  - 新增数组方法
    - `$$push`
    - `$$unshift`
    - `$$shift`
    - `$$reverse`
    - `$$sort`

### 0.0.5
- 2018.12.28
  - 新增`of`，array里方法支持链式调用
  - 修改array中`$$pop`

### 0.0.4
- 2018.12.27
  - 修改`observable`中`subscribe`另外接收两个参数被修改的key和新value
  - 将全局变量从`_t`替换成`$$`

### 0.0.3
- 2018.12.27
  - 新增`deepClone`
  - 新增`observable`

### 0.0.2
- 2018.12.14
  - 新增`debounce`
  - 新增`throttle`
  - 修复`isEmptyObject`的不严谨issue

### 0.0.1
- 2018.12.14
  - 初始版本
