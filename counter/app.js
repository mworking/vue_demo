import Vue from 'vue';
// 组件引入
import Count from './count.vue';
// 状态管理 引入
import store from './store';

// 根组件
new Vue({
    // 绑定模版 在Counter中
    el:'#app',
    // 把 store 对象提供给 “store” 选项，这可以把 store 的实例注入所有的子组件
    store,
    render: h => h(Count)
})