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

    //mapGetters是个方法，里面有一个数组参数
    export default {
        computed: mapGetters(['evenOrOdd']),
        methods:mapActions([
            'increment',
            'decrement',
            'incrementIfOdd',
            'incrementAsync'
        ])
    }

    // mapGetters 就是把原先vue在computed中的方法，拿到vuex中来写，通过mapGetters 对应过来
    // methods就是把原先vue在methods中的方法，拿到vuex中来写，通过mapActions 对应过来
    export default {
        // 把上面mapGetters换成不用vuex的写法，就是下面的， 所以说vuex可用可不用
        computed: {
            evenOrOdd: state => state.count % 2 === 0 ? 'even' : 'odd'
        },
        methods:mapActions([
            'increment',
            'decrement',
            'incrementIfOdd',
            'incrementAsync'
        ])
    }




</script>





