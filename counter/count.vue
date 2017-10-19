<template>
    <div id="app">
        clicked: {{ $store.state.count }} times, count is {{ evenOrOdd }}.
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
        <button @click="incrementIfOdd">Increment if odd</button>
        <button @click="incrementAsync">Increment if async</button>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex';

    export default {
        //（个人理解，以后修改 ）map 是不是可以理解为映射， vue 组件的computed 方法， 得到 vuex 的mapGetters方法， mapGetters 映射 vuex实例的getters方法
        computed: mapGetters([
           'evenOrOdd'
        ]),
        // （个人理解，以后修改 ），以后修改 map 是不是可以理解为映射， vue methods 方法， 得到 vuex 的mapActions方法， mapActions 映射 vuex实例的actions方法
        methods:mapActions([
            'increment',
            'decrement',
            'incrementIfOdd',
            'incrementAsync'
        ])
    }

</script>

