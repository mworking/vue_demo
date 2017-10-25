import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import cart from './modules/cart'
import products from './modules/products'

Vue.use(Vuex)

export default new Vuex.Store({
    actions,
    getters,
    modules: {
        cart,
        products
    }
})

/*
* import * as getters from './getters'
* 知识点：
* 如果有多个组件需要用到此属性，我们要么复制这个函数，或者抽取到一个共享函数然后在多处导入它——无论哪种方式都不是很理想。
*
* Vuex 允许我们在 store 中定义“getter”（可以认为是 store 的计算属性）。
* 就像计算属性一样，getter 的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算。
*
*
* **/