//变动类型
export const ADD_TO_CART = 'ADD_TO_CART'
export const CHECKOUT_REQUEST = 'CHECKOUT_REQUEST'
export const CHECKOUT_SUCCESS = 'CHECKOUT_SUCCESS'
export const CHECKOUT_FAILURE = 'CHECKOUT_FAILURE'
export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS'

/* **************
*  知识点：
*  vuex mutation 一章
*  使用常量替代 Mutation 事件类型
*  使用常量替代 mutation 事件类型在各种 Flux 实现中是很常见的模式。
*  这样可以使 linter 之类的工具发挥作用，
*  同时把这些常量放在单独的文件中可以让你的代码合作者对整个 app 包含的 mutation 一目了然：
*
*   // mutation-types.js
 export const SOME_MUTATION = 'SOME_MUTATION'
 // store.js
 import Vuex from 'vuex'
 import { SOME_MUTATION } from './mutation-types'

 const store = new Vuex.Store({
     state: { ... },
     mutations: {
         // 我们可以使用 ES2015 风格的计算属性命名功能来使用一个常量作为函数名
         [SOME_MUTATION] (state) {
         // mutate state
        }
     }
 })
*
*
*
* **/