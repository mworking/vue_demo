import shop from '../../api/shop'
import * as types from '../mutation-types'

// initial state
// shape: [{ id, quantity }]
const state = {
    added: [],
    checkoutStatus: null
}

/*
 * getters
 * Vuex 允许我们在 store 中定义“getter”（可以认为是 store 的计算属性）。就像计算属性一样，getter 的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算。
 * **/
const getters = {
    checkoutStatus: state => state.checkoutStatus
}

/*
* Action 类似于 mutation，不同在于：
*   Action 提交的是 mutation，而不是直接变更状态。
*   Action 可以包含任意异步操作。
* **/
const actions = {
    checkout ({ commit, state }, products) {
        // 把当前购物车的物品备份起来
        const savedCartItems = [...state.added]
        // 发出结账请求，然后乐观地清空购物车
        commit(types.CHECKOUT_REQUEST)
        // 购物 API 接受一个成功回调和一个失败回调
        shop.buyProducts(
            products,
            // 成功操作
            () => commit(types.CHECKOUT_SUCCESS),
            // 失败操作
            () => commit(types.CHECKOUT_FAILURE, { savedCartItems })
        )
    }
}

// mutations
const mutations = {
    // 添加购物车
    [types.ADD_TO_CART] (state, { id }) {
        state.lastCheckout = null
        // 判断购物车里面是否添加了该物品
        const record = state.added.find(p => p.id === id)
        // 没有添加， 添加一个
        if (!record) {
            state.added.push({
                id,
                quantity: 1
            })
        } else {
            //已经添加过了，则只增加该物品的数量
            record.quantity++
        }
    },

    // 发起支付请求，清空购物车
    [types.CHECKOUT_REQUEST] (state) {
        // clear cart
        state.added = []
        state.checkoutStatus = null
    },

    // 支付成功
    [types.CHECKOUT_SUCCESS] (state) {
        state.checkoutStatus = 'successful'
    },

    // 清空购物车
    [types.CHECKOUT_FAILURE] (state, { savedCartItems }) {
        // rollback to the cart saved before sending the request 在发送请求之前，回滚到保存的购物车
        state.added = savedCartItems
        state.checkoutStatus = 'failed'
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
