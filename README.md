## vue
```
component_contact :
    父组件向子组件传值 通过 props
component_contact_2
    子组件向父组件传递消息 通过 this.$emit 用到的知识点是 自定义事件
```

## vue router
   vue_router :
        vue router 使用简单介绍 https://router.vuejs.org/zh-cn/

shopping-cart 购物车示例

项目结构

    Vuex 并不限制你的代码结构。但是，它规定了一些需要遵守的规则：

    应用层级的状态应该集中到单个 store 对象中。

    提交 mutation 是更改状态的唯一方法，并且这个过程是同步的。

    异步逻辑都应该封装到 action 里面。

    只要你遵守以上规则，如何组织代码随你便。如果你的 store 文件太大，只需将 action、mutation 和 getter 分割到单独的文件。

    对于大型应用，我们会希望把 Vuex 相关代码分割到模块中。下面是项目结构示例：

    ├── index.html
    ├── main.js
    ├── api
    │   └── ... # 抽取出API请求
    ├── components
    │   ├── App.vue
    │   └── ...
    └── store
        ├── index.js          # 我们组装模块并导出 store 的地方
        ├── actions.js        # 根级别的 action
        ├── mutations.js      # 根级别的 mutation
        └── modules
            ├── cart.js       # 购物车模块
            └── products.js   # 产品模块