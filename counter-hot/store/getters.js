export const count = state => state.count

const limit = 5

export const recentHistory = state => {
    const end = state.history.length
    const begin = end - limit < 0 ? 0 : end - limit
    return state.history.slice(begin,end).toString().replace(/,/g, ', ')
}

// 等同于下面的内容
// export const count = function (state) {
//     return state.count;
// }
//
// export const recentHistory = function (state) {
//     const end = state.history.length
//     const begin = end - limit < 0 ? 0 : end - limit
//     return state.history.slice(begin,end).toString().replace(/,/g, ', ')
// }