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

// actions 涉及到调用异步 API 和分发多重 mutation：
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
    [types.ADD_TO_CART] (state, { id }) {
        state.lastCheckout = null
        const record = state.added.find(p => p.id === id)
        if (!record) {
            state.added.push({
                id,
                quantity: 1
            })
        } else {
            record.quantity++
        }
    },

    [types.CHECKOUT_REQUEST] (state) {
        // clear cart
        state.added = []
        state.checkoutStatus = null
    },

    [types.CHECKOUT_SUCCESS] (state) {
        state.checkoutStatus = 'successful'
    },

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
