import Vue from 'vue';
import store from './store';
import Count from './Count.vue';

new Vue({
    el:'#app',
    store,
    render:h => h(Count)
})