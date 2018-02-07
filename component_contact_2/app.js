import Vue from 'vue';
import FatherComponent from './FatherComponent.vue';

new Vue({
    el:'#app',
    render:h => h(FatherComponent)
})
