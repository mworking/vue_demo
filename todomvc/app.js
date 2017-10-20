import Vue from 'vue'
import store from './store'
import App from './components/APP.vue'

new Vue({
    store, //inject store to all children
    el:'#app',
    render:h=>h(App)
})