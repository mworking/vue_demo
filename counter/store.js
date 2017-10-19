import Vue from 'vue';
import Vuex from 'vuex';

// Vuex 通过 store 选项，提供了一种机制将状态从根组件“注入”到每一个子组件中（需调用 Vue.use(Vuex)）
Vue.use(Vuex);

// root state object.
// each Vuex instance is just a single state tree.
//单一状态树
// Vuex 使用单一状态树——是的，用一个对象就包含了全部的应用层级状态。至此它便作为一个“唯一数据源 (SSOT)”而存在。
// 这也意味着，每个应用将仅仅包含一个 store 实例。
// 单一状态树让我们能够直接地定位任一特定的状态片段，在调试的过程中也能轻易地取得整个当前应用状态的快照。
const state = {
    count:0
}

// mutations 变动，突变 are operations 操作 that actually 其实，事实上 mutates 变动 the state.
// 变动， 就是state的变动
// each mutation handler gets the entire 整个的 state tree as the
// first argument, followed by additional payload 有效载荷 arguments.
// mutations must be synchronous and can be recorded 记录 by plugins
// for debugging 调试 purposes 目的.
const mutations = {
    increment (state) {
        state.count ++
    },
    decrement (state) {
        state.count --
    }
}

// actions are functions that cause side effects 影响 （side effects 副作用） and can involve 涉及
// asynchronous operations (异步操作).
const actions = {
    increment: ({ commit }) => commit('increment'),
    decrement: ({ commit }) => commit('decrement'),
    incrementIfOdd({commit,state}){
        if((state.count + 1) % 2 === 0){
            commit('increment')
        }
    },
    incrementAsync ({commit}){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                commit('increment')
                resolve()
            },1000)
        })
    }
}

// getters are functions    getters 是一个方法
const getters = {
    evenOrOdd: state => state.count % 2 === 0 ? 'even' : 'odd'
}

// A Vuex instance is created by combining（结合 合并） the state, mutations, actions,and getters.
// vuex 实例 是 state， mutations， actions 和getters 的结合
export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})










