<template>
    <ul>
        <li v-for="p in products">
            {{ p.title }} - {{ p.price | currency }}
            <br>
            <button :disabled="!p.inventory" @click="addToCart(p)">
                Add to cart  <br>
                test :disabled info {{ p.inventory }} {{ !p.inventory }}
            </button>
        </li>
    </ul>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'

    export default {
        //映射getters
        computed: mapGetters({
            products: 'allProducts'
        }),
        //映射actinos
        methods: mapActions([
            'addToCart'
        ]),
        //在实例创建完成后被立即调用。
        // 在这一步，实例已完成以下的配置： 数据观测 (data observer)，属性和方法的运算，watch/event 事件回调。然而，挂载阶段还没开始，$el 属性目前不可见。
        created () {
            //Action 通过 store.dispatch 方法触发
            // 乍一眼看上去感觉多此一举，我们直接分发 mutation 岂不更方便？实际上并非如此，还记得 mutation 必须同步执行这个限制么？Action 就不受约束！我们可以在 action 内部执行异步操作：
            this.$store.dispatch('getAllProducts')
        }
    }
</script>
