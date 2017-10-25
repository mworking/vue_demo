import * as types from './mutation-types'
// 添加到购物车，产品数量必须大于 0
export const addToCart = ({ commit }, product) => {
    if (product.inventory > 0) {
        commit(types.ADD_TO_CART, {
            id: product.id
        })
    }
}
