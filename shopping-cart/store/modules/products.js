import shop from '../../api/shop'
import * as types from '../mutation-types'

// initial state
const state = {
    all: []
}

// getters
const getters = {
    allProducts: state => state.all
}

// actions
const actions = {
    // 模拟网络，获取所有的产品
    getAllProducts ({ commit }) {
        shop.getProducts(products => {
            commit(types.RECEIVE_PRODUCTS, { products })
        })
    }
}

// mutations
const mutations = {
    // 获取所有产品     为啥不在这里写获取所有产品的方法呢： 因为mutations 不可以执行异步，而actions可以，在action模拟异步网络请求，完成之后，在执行mutations
    [types.RECEIVE_PRODUCTS] (state, { products }) {
        state.all = products
    },
    // 添加到购物车， 产品数量递减
    [types.ADD_TO_CART] (state, { id }) {
        state.all.find(p => p.id === id).inventory--
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
