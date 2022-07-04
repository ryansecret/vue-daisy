# vue daisy

本项目为vue 插件，方便的提供了一些常用的代码段，并为常用的组件如elementUI、iview以及自定义组件提供了智能提示。


## 使用说明



### element 代码段
只需要在Vue 文件中输入 el。。。

![](https://pic.imgdb.cn/item/62c285b15be16ec74a048b1e.gif)

### hover 组件提示
鼠标移动到组件上会有对应组件的信息。

![](https://pic.imgdb.cn/item/62c285c55be16ec74a04a2cc.gif)

### 智能提示组件的属性
在组件内输入空格或者: 会智能提示组件的属性。

![](https://pic.imgdb.cn/item/62c285ad5be16ec74a04860d.gif)


### 组件的配置

![](https://pic.imgdb.cn/item/62c286125be16ec74a050087.png)

1. webpack alias

   webpack alias 中的配置，默认为  "@": "src"
2. Component Path

   组件所在的跟目录，如果不配置会全量搜索。
3. Component Dir Rgex

   组件所在文件夹的regex，默认为 `.*/components/.*`
1. component Prefix

   主要为了精确找到组件的路径，如果配置了webpack alias就需要配置下，默认值  {"alias": "@","path": "src"}

1. Tag Name Way

   组件名的格式，有 "kebabCase", "camelCase","CamelCase" 三种格式，默认为 CamelCase。


