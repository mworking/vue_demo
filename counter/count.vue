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
        computed: mapGetters([
           'evenOrOdd'
        ]),
        methods:mapActions([
            'increment',
            'decrement',
            'incrementIfOdd',
            'incrementAsync'
        ])
    }

</script>

