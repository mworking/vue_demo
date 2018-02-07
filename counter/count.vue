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
        //1. computed 是vue 中的东西， 用于计算初始值属性
        //2. mapGetters 是vuex 中的东西
        //3. 通过如下方式，相当于把vue中原先computed里面写的，拿到vuex中去了
        //4. vuex 其实就是一个vue的插件的作用，Vue.use(Vuex); 就代表，我使用你vuex这个插件了
        //5. computed 就像vue提供的插座， mapGetters就像vuex提供的插头，把原先computed这儿的一堆东西，做了个封装
        //6. 综上所述， vuex不是必须的，可用也可不用，没有他依然可以完成所有功能，我依然可以在computed中写一堆东西，
        // ，依然可以把方法写到methods中，vuex的存在是为了简化vue的操作，精简一部分流程，更好管理，使用

        // 其实一看vue,vuex或者react的框架，webpack的东西，发现一堆东西，很多看都看不懂，没关系，你只要关注关键的，重要的api，一些常用的，主要的功能，整理，总结，会用了，就可以了
        // 其余的话，是针对特定的场景，特定的情况开发的，你这辈子或许都用不着，所以，没必要都看， 这看主要的，卡卡，能用了，就行了，不要跟着文档，要全部搞懂啥的，等用到了，再去看也不迟
        // 所以，专注简单，先要会用，千万不要刚开始就深抠
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

